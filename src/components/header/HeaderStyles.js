import styled from "styled-components";
import backgroundImg from "../../assets/img/backgrounds/background-header.jpg"

export const HeaderContainer = styled.header`
  background: url(${backgroundImg});
  height: 90vh;
  max-width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

export const HeaderContent = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
`

export const Nav = styled.nav`
  display: flex;
  gap: 25px;

  a{
    text-decoration: none;
    font-size: 24px;
    color: #FFFFFF;
    font-family: "Work Sans", sans-serif;
    position: relative;
  }
 
  a::after {
  content: " ";
  width: 0%;
  height: 2px;
  background-color: #DEC7A6;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: width 0.3s ease-in-out; /* Corrigi a propriedade de transição aqui */
}

a:hover::after {
  width: 100%;
}

@media (max-width: 768px){
    display: none;
  }

`;