import React, { useState } from "react";
import Container from "./styles";

const Grid = (props) => {
  const [activeGrid, setActiveGrid] = useState();

  const handleActive = () => {
    setTimeout(() => {
      setActiveGrid(false);
    }, 2 * 1000);
    setActiveGrid(true);
  };

  return (
    <Container>
      <div
        className={`${"grid"} ${activeGrid ? "active" : ""}`}
        onClick={handleActive}
      >
        <div className={"project"}>
          {<img src={props.src} alt={"project"} />}
        </div>
        <div className={"view"}>View</div>
      </div>
    </Container>
  );
};

export default Grid;
