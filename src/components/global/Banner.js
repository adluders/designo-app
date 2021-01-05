import styled from "styled-components";
import BgPattern from "../../assets/home/desktop/bg-pattern-hero-home.svg";

const updateDisplay = (location) => {
  switch (location) {
    case "header":
      return "justify-content: center";
    case "hero":
      return `background-image:url(${BgPattern})`;
    default:
      return "justify-content: space-between";
  }
};

const changeFlexDir = (location) => {
  switch (location) {
    default:
      return "row";
    case "hero":
      return "column ";
  }
};

const Banner = styled.section`
  background-color: #e7816b;
  background-repeat: no-repeat;
  background-position: 100%;

  display: flex;
  align-items: center;

  border-radius: 1rem;
  ${({ location }) => updateDisplay(location)};

  @media screen and (max-width: 768px) {
    flex-direction: ${({ location }) => changeFlexDir(location)};
    /* height: 20%; */
  }
`;

export default Banner;
