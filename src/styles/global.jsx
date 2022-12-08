import { createGlobalStyle, keyframes } from "styled-components";

const animation = keyframes`from {
  opacity: 0;
  margin-top: -50%;
}`;

const GlobalStyles = createGlobalStyle`
  :root {
    --color0: #edf3f5;
    --color1: #1f2667;
    --color2: #45e696;
    --color3: #ff0000;
    --color4: #ffc400;
    --color5: #0000ff;
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    font-size: 17px;
  } 
  
  html,
  body {
    padding: 0;
    margin: 0;
    color: #ffff;
    font-family: "Concert One", cursive;
    background-color: var(--color1);
  }

  h1 {
    font-family: "Play", sans-serif;
    color: var(--color2);
    font-size: 40px;
    margin: 20px 0;
  }

  li {
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .page {
    color: var(--color0);
    margin-top: 10vh;
    animation: ${animation} 0.7s linear;
  }
  
  @media (min-width: 884px) {
    pages {
      height: 90vh;
    }
  }
`;

export default GlobalStyles;
