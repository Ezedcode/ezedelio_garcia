import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    background: linear-gradient(to top, var(--color2), var(--color4));
  }

  25% {
    background: linear-gradient(to right, var(--color2), var(--color4));
  }

  50% {
    background: linear-gradient(to bottom, var(--color2), var(--color4));
  }

  75% {
    background: linear-gradient(to left, var(--color2), var(--color4));
  }

  50% {
    background: linear-gradient(to bottom, var(--color2), var(--color4));
  }
`;

const Container = styled.div`
  .contact {
    height: 90vh;
    text-align: justify;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contact > div {
    width: 40%;
  }

  .contact > div:last-child {
    height: 20.2rem;
    width: 25.2rem;
    margin-left: 25px;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(to left, var(--color2), var(--color4));
    animation: ${animation} 0.5s linear infinite;
  }

  @media (max-width: 884px) {
    .contact {
      height: 90vh;
      justify-content: center;
      text-align: center;
      flex-direction: column;
    }

    .contact > div {
      width: 80%;
    }

    .contact p {
      max-width: 450px;
      margin: auto;
    }

    .contact > div:last-child {
      height: 7.2rem;
      width: 21.2rem;
      margin-top: 3rem;
      margin-left: 0px;
    }
  }
`;

export default Container;
