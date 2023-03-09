import React, { useContext } from "react";
import * as projects 
import Grid from "./grid";

import projects from "../../data/projects.json";
import { Container, Main, Project } from "./styles";
import GlobalVar from "../../context/GlobalVar";

const Projects = () => {
  const { setStatusPage } = useContext(GlobalVar);

  setStatusPage(3);

  return (
    <Main>
      <Container>
        {projects.map((project, index) => {
          // eslint-disable-next-line react/jsx-key
          return (
            <Project secund={`${index * 0.2}`}>
              <a href={project.toString()} target="_blank" rel="noreferrer">
                <Grid src={`./projects/${index + 1}.png`} />
              </a>
            </Project>
          );
        })}
      </Container>
    </Main>
  );
};

export default Projects;
