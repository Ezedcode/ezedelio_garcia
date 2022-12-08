import React from "react";
import { Link } from "react-router-dom";
import Container from "./styles";

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <div className={"logo"}>E</div>
      </Link>
    </Container>
  );
};

export default Logo;
