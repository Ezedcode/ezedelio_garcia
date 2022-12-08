import styled from "styled-components";

const Container = styled.div`
  .skills {
    height: 90vh;
    text-align: justify;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .skills > div {
    width: 40%;
  }

  .skills > div:last-child {
    color: var(--color2);
    padding: 20px;
    border-radius: 10px;
    margin-left: 20px;
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    background-color: #00000063;
  }

  .skills li {
    font-weight: bolder;
    list-style: square;
    margin-left: 30px;
  }

  .skillsArea li:nth-of-type(1) {
    color: #e0740e;
  }

  .skillsArea li:nth-of-type(2) {
    color: #10a8db;
  }

  .skillsArea li:nth-of-type(3) {
    color: #c4c431;
  }

  .skillsArea li:nth-of-type(4) {
    color: #00ffff;
  }

  .skillsArea > ul:last-child li:nth-of-type(1) {
    color: #358500;
  }

  .skillsArea > ul:last-child li:nth-of-type(2) {
    color: #ffff;
  }

  .skillsArea {
    border-radius: 10px;
    width: 100%;
    height: 8rem;
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--color1);
  }

  @media (max-width: 884px) {
    height: 100%;

    .skills {
      flex-direction: column;
    }

    .skills > div {
      width: 80%;
    }

    .skills > div:last-child {
      margin-top: 2rem;
      margin-bottom: 3rem;
      margin-left: 0px;
    }

    .skillsArea {
      margin-top: 2.5rem;
    }
  }
`;

export default Container;
