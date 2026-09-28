import { defineConfig } from "astro/config";

// Set `site` to the production URL once the Vercel domain is known,
// so canonical URLs are generated.
export default defineConfig({
  trailingSlash: "ignore"
});
