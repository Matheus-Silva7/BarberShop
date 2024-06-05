import styled from 'styled-components';

export const ButtonM = styled.a`
  background-color: #DEC7A6;
  color: #000;
  padding: 20px; 
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;

  &:hover{
    background-color: #A7957B;
    transition: 1s;
  }

  &:active{
    background-color:#c5b194;
    transition: 0.3s;
  }

  @media (max-width:450px){
    padding: 16px;
    font-size: 12px;
   }

   @media screen and (max-width: 340px) {
    padding: 13px;
   font-size: 10px;
  }
  `

export const ButtonS = styled.a`
  background-color: transparent;
  border: solid 2px #FFF;
  color: #FFF;
  padding: 20px; 
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;

  &:hover{
    background-color: #ffffff46;
    transition: 1s;
  }
  
  &:active{
    background-color:#ffffff6c;
    transition: 0.3s;
  }
  @media (max-width:450px){
   padding: 16px;
   font-size: 12px;
  }

  @media screen and (max-width: 340px) {
    padding: 13px;
   font-size: 10px;
  }
  `;