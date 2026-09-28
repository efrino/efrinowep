import { readFile } from "node:fs/promises";
import { Marked, Renderer } from "marked";

const OWNER = "efrino";

/**
 * Fetch a repository's README from GitHub at build time.
 * Falls back to the snapshot in content/readmes/ so a network hiccup on the
 * build machine never breaks the deploy (refresh snapshots with `npm run snapshot`).
 */
export async function loadReadme(repo: string): Promise<{ markdown: string; source: "github" | "snapshot" }> {
  for (const branch of ["main", "master"]) {
    try {
      const res = await fetch(`https://raw.githubusercontent.com/${OWNER}/${repo}/${branch}/README.md`, {
        signal: AbortSignal.timeout(10_000)
      });
      if (res.ok) return { markdown: await res.text(), source: "github" };
    } catch {
      // try the next branch, then the snapshot
    }
  }
  const markdown = await readFile(new URL(`../../content/readmes/${repo}.md`, import.meta.url), "utf8");
  return { markdown, source: "snapshot" };
}

/**
 * Remove parts of the README that the page already shows in its own header:
 * the centered title/badge block at the top and the trailing "Author" section.
 */
function trimForPage(md: string): string {
  let out = md.replace(/^\s*<div align="center">[\s\S]*?<\/div>\s*(---\s*)?/, "");
  out = out.replace(/\n## Author[\s\S]*$/, "\n");
  return out.trim();
}

/** Point relative links and images at the repository on GitHub. */
function absolutize(url: string, repo: string, kind: "link" | "image"): string {
  if (/^([a-z]+:|#|\/\/)/i.test(url)) return url;
  const clean = url.replace(/^\.\//, "");
  return kind === "image"
    ? `https://raw.githubusercontent.com/${OWNER}/${repo}/HEAD/${clean}`
    : `https://github.com/${OWNER}/${repo}/blob/HEAD/${clean}`;
}

export function renderReadme(markdown: string, repo: string): string {
  const marked = new Marked({ gfm: true });
  marked.use({
    renderer: {
      code({ text, lang }) {
        if (lang === "mermaid") return `<pre class="mermaid">${escapeHtml(text)}</pre>`;
        const cls = lang ? ` class="language-${escapeHtml(lang)}"` : "";
        return `<pre><code${cls}>${escapeHtml(text)}</code></pre>`;
      },
      link({ href, title, tokens }) {
        const url = absolutize(href, repo, "link");
        const external = /^https?:/.test(url);
        const t = title ? ` title="${escapeHtml(title)}"` : "";
        const rel = external ? ` target="_blank" rel="noopener noreferrer"` : "";
        return `<a href="${escapeHtml(url)}"${t}${rel}>${this.parser.parseInline(tokens)}</a>`;
      },
      image({ href, title, text }) {
        const t = title ? ` title="${escapeHtml(title)}"` : "";
        return `<img src="${escapeHtml(absolutize(href, repo, "image"))}" alt="${escapeHtml(text)}"${t} loading="lazy" />`;
      },
      table(token) {
        // Wrap tables so wide ones scroll instead of breaking the layout on phones.
        return `<div class="table-wrap">${Renderer.prototype.table.call(this, token)}</div>`;
      }
    }
  });
  return marked.parse(trimForPage(markdown), { async: false }) as string;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
