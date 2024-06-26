import styled from 'styled-components';

export const SectionWhy = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  padding: 40px;

  h2{
    text-align: center;
    padding: 12px;
    font-size: 48px;
    font-weight:800;
    text-transform: uppercase;
  }

  p{
    font-size: 18px;
    max-width: 60ch;
    text-align: center;
  }

  @media (max-width: 450px){
    h2{
      font-size: 45px;
    }
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: space-evenly;
  margin:50px 0;
  @media (max-width: 820px){
   gap: 40px;
  }
  @media (max-width: 450px){
    flex-direction: column;
    align-items: center;
  }
`

export const CardDiv = styled.div`
h3{
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  padding: 8px;
  max-width: 8ch;
  margin: 0 auto 15px;
 }

 h3::after{
  content: "";
    position: absolute;
    bottom: -5px; 
    left: 0px;
    width: 100%;
    height: 5px;
    background-color: #DEC7A6; 
 }

 p{
  font-size: 16px;
  line-height: 1.5;
 }

 max-width: 34ch;

 
`