import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #000;
  height: auto;
  width: 100%;
  z-index: 3;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  .menu-mobile {
    display: none;
  }

  .logo {
    width: 8rem;
    z-index:10;
  }

  @media (max-width: 820px) {
    .menu-mobile {
      display: block;
      z-index:10;
    }

    .menu-mobile .icon {
      font-size: 60px;
      color: #fff;
      
    }
  }

  @media (max-width: 500px) {
    .logo {
      width: 6rem;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 25px;

  a {
    text-decoration: none;
    font-size: 24px;
    color: #ffffff;
    font-family: "Work Sans", sans-serif;
    position: relative;
  }

  a::after {
    content: " ";
    width: 0%;
    height: 2px;
    background-color: #dec7a6;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.3s ease-in-out;
  }

  a:hover::after {
    width: 100%;
  }

  @media (max-width: 820px) {
    display: flex;
    height: 60vh;
    width: 100%;
    top: -100%;
    position: absolute;
    background: #000000e6;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: 0.5s;

    &.active{
      top:0;
    }
  }
`;
