import React from "react";
import { useContext } from "react";
import Container from "./styles";
import home from "../../data/home.json";
import avatar from "../../assets/img/ezedelio.png";
import GlobalVar from "../../context/GlobalVar";

const Home = () => {
  const { setStatusPage } = useContext(GlobalVar);

  setStatusPage(1);
  return (
    <Container className="page">
      <div>
        <p>{home.greeting}👋</p>
        <h1>{home.title}</h1>
        <p>{home.about}</p>
      </div>
      <div>
        <div></div>
        <div>{<img src={avatar} alt="Ezedélio" />}</div>
        <div></div>
      </div>
    </Container>
  );
};

export default Home;
