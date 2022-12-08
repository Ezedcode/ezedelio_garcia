import React, { useContext } from "react";

import skills from "../../data/skills.json";

import GlobalVar from "../../context/GlobalVar";
import Container from "./styles";

const Skills = () => {
  const { setStatusPage } = useContext(GlobalVar);

  setStatusPage(2);
  return (
    <Container>
      <div className={`${"skills"} ${"page"}`}>
        <div>
          <h1>{skills.Myself}</h1>
          <p>{skills.content.p1}</p>
          <br />
          <p>{skills.content.p2}</p>
        </div>
        <div>
          <p>{skills.abilities.p3}</p>
          <div className="skillsArea">
            <ul>
              {skills.abilities.technologies.map(
                (array, index) =>
                  // eslint-disable-next-line react/jsx-key
                  index < 4 && <li>{skills.abilities.technologies[index]}</li>
              )}
            </ul>
            <ul>
              {skills.abilities.technologies.map(
                (array, index) =>
                  // eslint-disable-next-line react/jsx-key
                  index >= 4 && <li>{skills.abilities.technologies[index]}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
