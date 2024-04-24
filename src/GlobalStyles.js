import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F8F5EF;
    margin-bottom: 2000px;
    font-family: "Barlow", sans-serif;
  }

  h1,h2,h3,h4,h5,h6,p{
    margin: 0;
  }

  p{
    font-family: "Work Sans", sans-serif;
  }
`;

export default GlobalStyles;
