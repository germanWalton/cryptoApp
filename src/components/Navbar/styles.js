import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const NavLink = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  font-size: 18px;
  color: #333;
  font-weight: light;
  transition: color 0.3s ease;

  &:hover {
    color: #555;
  }

  &:active {
    color: #222;
  }
`;
