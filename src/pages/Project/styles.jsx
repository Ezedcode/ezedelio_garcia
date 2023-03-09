import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const Project = styled.div`
  position: relative;
  animation: ${Animation} ${(props) => props.secund}s linear;
`;

export const Container = styled.div`
  & {
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    justify-content: center;
    align-content: center;
  }

  & .last-items {
    display: flex;
    background: #00ffff;
  }

  @media (max-width: 1055px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media (max-width: 665px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

export const Main = styled.div`
  margin-top: 9.5rem;

  @media (max-width: 582px) {
    & {
      margin-top: 2rem;
    }
  }

  @media (min-width: 1055px) {
    @media (min-height: 582px) {
      height: 90vh;
      display: flex;
      flex-direction: column;
      align-item: center;
      justify-content: center;
    }
  }
`;
