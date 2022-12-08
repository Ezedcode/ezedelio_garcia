import React from "react";
import Container from "./styles";

const Loading = () => {
  return (
    <Container>
      <div className={"loading"}>
        <div>
          <div className={"first"}></div>
          <div className={"secund"}></div>
          <div className={"secund"}></div>
          <div className={"first"}></div>
        </div>
      </div>
    </Container>
  );
};

export default Loading;
