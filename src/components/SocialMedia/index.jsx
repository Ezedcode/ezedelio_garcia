import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import Container from "./styles";

const SocialMedia = () => {
  return (
    <Container className={"socialMedia"}>
      <a
        href="https://www.linkedin.com/in/ezedélio-garcia"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/Ezedcode" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </Container>
  );
};

export default SocialMedia;
