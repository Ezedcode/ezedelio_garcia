import React from "react";

import Container from "./styles";

const SendBtn = () => {
  return (
    <Container>
      <button className={"sendBtn"}>
        <a href="mailto:ezedeliogarcia@gmail.com">Send message!</a>
      </button>
    </Container>
  );
};

export default SendBtn;
