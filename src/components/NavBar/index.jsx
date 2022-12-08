import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import GlobalVar from "../../context/GlobalVar";
import Tag from "../Tag";
import Container from "./styles";

const NavBar = () => {
  const { menuBtn, setMenuBtn, statusPage } = useContext(GlobalVar);

  const page = [true, false, false, false];

  page.forEach((element, index) => {
    if (index + 1 === statusPage) {
      page[index] = true;
    } else {
      page[index] = false;
    }
  });

  return (
    <Container>
      <nav className={`${"nav"} ${menuBtn && "active"}`}>
        <Link to="/">
          <div
            onClick={() => {
              setMenuBtn(false);
            }}
          >
            <Tag page="Home" active={page[0]} />
          </div>
        </Link>
        <Link to="/Skills">
          <div
            onClick={() => {
              setMenuBtn(false);
            }}
          >
            <Tag page="Skills" active={page[1]} />
          </div>
        </Link>
        <Link to="/Projects">
          <div
            onClick={() => {
              setMenuBtn(false);
            }}
          >
            <Tag page="Projects" active={page[2]} />
          </div>
        </Link>
        <Link to="/Contact">
          <div
            onClick={() => {
              setMenuBtn(false);
            }}
          >
            <Tag page="Contact" active={page[3]} />
          </div>
        </Link>
        <a href="../../doc/resume.pdf" target="_blank">
          <span className={"resume"}>Resume</span>
        </a>
      </nav>
      <Outlet />
    </Container>
  );
};

export default NavBar;
