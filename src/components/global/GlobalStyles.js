import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Jost', sans-serif ;
}

img{
  display: inline-block;
  width: 100%;
}

li{
  list-style: none;
}

a{
  text-decoration: none;
}

`;

export const Container = styled.div`
  width: 77%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 414px) {
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  width: 25%;
  @media screen and (max-width: 414px) {
    width: 50%;
  }
`;

export default GlobalStyles;
