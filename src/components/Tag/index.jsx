import React from "react";
import Container from "./styles";

const Tag = (props) => {
  return (
    <Container>
      <div className={`${"tag"} ${props.active && "active"}`}>
        <span>{"<"}</span>
        {props.page}
        <span>{"/"}</span>
        <span>{">"}</span>
      </div>
    </Container>
  );
};

export default Tag;
