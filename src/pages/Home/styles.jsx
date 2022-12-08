import styled, { keyframes } from "styled-components";

const square = keyframes`
    0%,
    100% {
      top: -50px;
    }

    50% {
      top: -30px;
    }
    `;

const circle = keyframes`
    0%,
    100% {
      top: 83%;
      right: 0%;
      left: 63%;
    }

    50% {
      top: 63%;
      right: -22%;
      left: 87%;
    }
  `;

const Container = styled.div`
  height: 90vh;
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    width: 520px;
  }

  & > div:last-child {
    position: relative;
    width: 250px;
    height: 250px;
    display: flex;
    margin-left: 60px;
    justify-content: space-between;
  }

  & img {
    width: 100%;
  }

  & > div:last-child > div:first-child,
  & > div:last-child div:last-child {
    position: absolute;
  }

  & > div:last-child div:first-child {
    width: 7rem;
    height: 7rem;
    rotate: 70deg;

    border-radius: 10px;
    background-color: var(--color2);
  }

  & > div:last-child div:nth-child(2) {
    position: relative;
  }

  & > div:last-child div:nth-child(2) img {
    border-radius: 20px;
  }

  & > div:last-child div:last-child {
    width: 7rem;
    height: 7rem;
    border-radius: 100%;
    background-color: var(--color3);
  }

  & > div:last-child div:first-child {
    left: -3rem;
    animation: ${square} 2s linear infinite;
  }

  & > div:last-child div:last-child {
    animation: ${circle} 4s linear infinite;
  }

  @media (max-width: 884px) {
    & {
      text-align: center;
      flex-direction: column-reverse;
    }

    & > div:last-child {
      margin-left: 0px;
    }

    & > div:last-child {
      width: 200px;
      height: 200px;
      margin-top: 5rem;
      margin-bottom: 1rem;
    }

    & > div:last-child div:first-child,
    & > div:last-child div:last-child {
      width: 5rem;
      height: 5rem;
    }

    & p {
      margin: 0 auto;
      width: 97%;
    }
  }

  @media (max-width: 420px) {
    & > div:last-child {
      margin-bottom: 2rem;
    }

    & > div:first-child {
      margin: 0 auto;
      width: 90%;
    }

    & h1 {
      font-size: 26px;
    }
  }
`;

export default Container;
