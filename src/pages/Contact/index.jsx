import React, { useContext } from "react";

import contact from "../../data/contact.json";

import SendBtn from "../../components/button/SendBtn";
import GlobalVar from "../../context/GlobalVar";
import Container from "./styles";

const Contact = () => {
  const { setStatusPage } = useContext(GlobalVar);

  setStatusPage(4);
  return (
    <Container>
      <div className={`${"contact"} ${"page"}`}>
        <div>
          <h1>{contact.title}</h1>
          <p>{contact.content}</p>
        </div>
        <div>
          <SendBtn />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
