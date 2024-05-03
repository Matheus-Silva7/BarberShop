import styled from "styled-components";

export const SectionAbout = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px 40px;

  @media (max-width: 768px){
    flex-direction: column;
  }
`;

export const DivTextAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 75vh;
  padding:20px;
  gap: 50px;

  h2{
    font-size: 48px;
  font-weight: 800;
  text-transform: uppercase;
  max-width: 15ch;
  }

  p{
    font-size: 22px;
  max-width: 50ch;
  }
`;



export const DivInfos = styled.div`
  display: flex;
 justify-content: space-between; 
 width: 80%;

 h3{
  font-size: 48px;
  font-weight: 800;
 }

h4{
  font-size: 20px;
    font-weight: 800;
    text-transform: uppercase;
    max-width: 17ch;
}

span{
  color: #DEC7A6;
}
`

