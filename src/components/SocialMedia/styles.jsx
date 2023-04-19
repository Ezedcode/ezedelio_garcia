import styled from "styled-components";

const Container = styled.div`
  &.socialMedia {
    position: fixed;
    top: 50%;
    height: 3rem;
    padding: 5px 0;
    width: 2rem;
    color: black;
    background-color: var(--color0);
    border-radius: 0 5px 5px 0;
    box-shadow: 5px 5px 0px 1px #f5f5dca6;
    transition: 0.5s;
    z-index: 1;
  }

  &.socialMedia:hover {
    box-shadow: 0px 0px 0px 0px #f5f5dca6;
    background-color: #45dbe6;
  }

  &.socialMedia a {
    color: var(--color1);
    font-size: 25px;
    cursor: pointer;
    margin-left: 2px;
    transition: 0.5s;
  }

  &.socialMedia a:hover {
    color: rgba(253, 22, 22, 0.678);
    transition: 0.7s;
  }
`;

export default Container;
