import aws from "/public/svg/skills/aws.svg";
import css from "/public/svg/skills/css.svg";
import docker from "/public/svg/skills/docker.svg";
import git from "/public/svg/skills/git.svg";
import html from "/public/svg/skills/html.svg";
import javascript from "/public/svg/skills/javascript.svg";
import mongoDB from "/public/svg/skills/mongoDB.svg";
import python from "/public/svg/skills/python.svg";
import react from "/public/svg/skills/react.svg";
import selenium from "/public/svg/skills/selenium.svg";
import typescript from "/public/svg/skills/typescript.svg";
import nodejs from "/public/svg/skills/nodejs.svg";
import nestjs from "/public/svg/skills/nestjs.svg";
import fastapi from "/public/svg/skills/fastapi.svg";
import nextjs from "/public/svg/skills/nextJS.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "aws":
      return aws;
    case "css":
      return css;
    case "docker":
      return docker;
    case "git":
      return git;
    case "html":
      return html;
    case "javascript":
      return javascript;
    case "mongodb":
      return mongoDB;
    case "python":
      return python;
    case "react":
      return react;
    case "selenium":
      return selenium;
    case "typescript":
      return typescript;
    case "nodejs":
      return nodejs;
    case "nestjs":
      return nestjs;
    case "fastapi":
      return fastapi;
    case "nextjs":
      return nextjs;
    default:
      break;
  }
};
