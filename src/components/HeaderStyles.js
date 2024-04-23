import styled from "styled-components";
import backgroundImg from "../assets/background-header.svg"

export const HeaderContainer = styled.header`
  background: url(${backgroundImg});
  height: 80vh;
  max-width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeaderContent = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled.a`
  text-decoration: none;
  font-size: 24px;
  color: #FFFFFF;
`;
