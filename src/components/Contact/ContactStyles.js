import styled from 'styled-components';
import backgroundContact from "../../assets/img/backgrounds/background-contact.jpg"

export const SectionContact = styled.section`
  height: 80vh;
  background: url(${backgroundContact});
  background-size: cover;
  color: #FFF;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;


  @media (max-width: 820px){
   height: auto;
   flex-direction: column;
   gap: 20px;
  }
`;

export const DivContactText = styled.div`
  width: 40%;
  height: 100%;
  padding: 10px;
  display: flex;
 flex-direction: column;
 justify-content: center;
  gap: 30px;

  h2{
    font-size: 48px;
    text-transform: uppercase;
    font-weight: 800;
  }

  p{
    font-size: 16px;
    max-width: 50ch;
  }

  @media (max-width: 820px){
  width: 100%
  }
`
export const DivInfoContact = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  .icon-contact{
    color: #000;
    background-color: #FFF;
    font-size: 30px;
    padding: 12px;
  }

  h4{
    font-size: 16px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  p{
    font-size: 16px;
  }
`;