import React, { useContext } from "react";
import img1 from "../../assets/img/1.png";
import img2 from "../../assets/img/2.png";
import img3 from "../../assets/img/3.png";
import img4 from "../../assets/img/4.png";
import img5 from "../../assets/img/5.png";
import img6 from "../../assets/img/6.png";
import img7 from "../../assets/img/7.png";
import img8 from "../../assets/img/8.png";
import img9 from "../../assets/img/9.png";
import img10 from "../../assets/img/10.png";
import Grid from "./grid";

import projects from "../../data/projects.json";
import { Container, Main, Project } from "./styles";
import GlobalVar from "../../context/GlobalVar";

const Projects = () => {
  const { setStatusPage } = useContext(GlobalVar);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  setStatusPage(3);

  return (
    <Main>
      <Container>
        {projects.map((project, index) => {
          // eslint-disable-next-line react/jsx-key
          return (
            <Project secund={`${index * 0.2}`}>
              <a href={project.url} target="_blank" rel="noreferrer">
                <Grid src={images[index]} technologies={project.tec} />
              </a>
            </Project>
          );
        })}
        <div className="last-items"></div>
        <div className="last-items"></div>
      </Container>
    </Main>
  );
};

export default Projects;
