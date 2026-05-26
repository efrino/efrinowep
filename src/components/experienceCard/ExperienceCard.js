import React, {createRef} from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  const imgRef = createRef();

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  const fileName = `~/${cardInfo.company.replace(/\s+/g, '-').toLowerCase()}.log`;
  const isCurrent = cardInfo.date.includes("Present");

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div className="experience-banner">
        <div className="terminal-header">
          <span className="dot close"></span>
          <span className="dot minimize"></span>
          <span className="dot maximize"></span>
          <span className="terminal-title">{fileName}</span>
        </div>
        <div className="experience-div-company">
          <img
            crossOrigin={"anonymous"}
            ref={imgRef}
            className="experience-roundedimg"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
          />
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {isCurrent && <span className="status-pulse"></span>}
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
