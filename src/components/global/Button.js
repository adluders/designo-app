import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border: none;
  outline: none;
  background-color: ${(props) => (props.primary ? "#e7816b" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#333136")};
  padding: 1.25rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 15px;
  text-transform: uppercase;
  min-width: 152px;
  text-align: center;
  &:hover {
    color: #fff;
    background-color: #ffad9b;
  }
`;
