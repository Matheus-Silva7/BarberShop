import styled from "styled-components";

export const SectionAbout = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px 40px;

  img{
    width: 450px;
  }

  @media (max-width: 820px){
    flex-direction: column; 

    img{
    width: 80%;
    }
  }

  @media (max-width: 450px){

    img{
    width: 95%;
    }
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

  @media (max-width: 820px){
   align-items: center;
   height: auto;
   h2{
    max-width: 25ch;
   }

   p{
    font-size: 25px;
   }
  }

  @media (max-width: 450px){
  
   h2{
   font-size: 39px;
   }

  p{
    font-size: 28px;
  }
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

@media (max-width: 820px){
   align-items: center;
  h3{
    font-size: 58px;
  }

  h4{
    font-size: 25px;
  }
  }

  @media (max-width: 450px){
    justify-content: center;
    gap: 20px;
  }
`

