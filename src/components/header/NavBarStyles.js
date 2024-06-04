import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #0000008f;
  height: auto;
  width: 100%;
  position: absolute;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;


  .menu-mobile {
    display: none;
  }

  @media (max-width: 820px) {
    .menu-mobile {
      display: block;
    }

    .menu-mobile .icon {
      font-size: 60px;
      color: #fff;
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
    transition: width 0.3s ease-in-out; /* Corrigi a propriedade de transição aqui */
  }

  a:hover::after {
    width: 100%;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;
