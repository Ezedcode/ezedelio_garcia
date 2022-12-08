import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  z-index: 1;
  position: fixed;
  top: 0;
  background-color: var(--color0);

  & > div {
    width: 90%;
    height: 10vh;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Container;
