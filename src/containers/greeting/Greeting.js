import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import HeroPipeline from "./HeroPipeline";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <span className="greeting-nickname-label">SYSTEM_ARCHITECT // PPIC ENGINEER</span>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}
              </h1>
              <div className="greeting-terminal-box">
                <div className="terminal-header">
                  <span className="dot close"></span>
                  <span className="dot minimize"></span>
                  <span className="dot maximize"></span>
                  <span className="terminal-title">~/profile.sh</span>
                </div>
                <p
                  className={
                    isDark
                      ? "dark-mode greeting-text-p"
                      : "greeting-text-p subTitle"
                  }
                >
                  <span className="prompt">❯</span> {greeting.subTitle}
                </p>
              </div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <HeroPipeline />
          </div>
        </div>
      </div>
    </Fade>
  );
}
