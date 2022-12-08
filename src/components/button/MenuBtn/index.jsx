import React, { useContext } from "react";
import GlobalVar from "../../../context/GlobalVar";
import Container from "./styles";

const MenuBtn = () => {
  const { menuBtn, setMenuBtn } = useContext(GlobalVar);

  const handleClick = () => {
    if (menuBtn) {
      setMenuBtn(false);
    } else {
      setMenuBtn(true);
    }
  };

  return (
    <Container>
      <button
        className={`${"menuBtn"} ${menuBtn && "active"}`}
        onClick={handleClick}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
    </Container>
  );
};

export default MenuBtn;
