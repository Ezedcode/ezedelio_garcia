import React from "react";
import MenuBtn from "../button/MenuBtn";
import Logo from "../Logo";
import NavBar from "../NavBar";
import Container from "./styles";

const Header = () => {
  return (
    <Container>
      <div>
        <Logo />
        <NavBar />
        <MenuBtn />
      </div>
    </Container>
  );
};

export default Header;
