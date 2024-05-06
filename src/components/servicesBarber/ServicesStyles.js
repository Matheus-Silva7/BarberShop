import styled from 'styled-components';

export const SectionService = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
 justify-content: space-around;
  gap: 30px;
  padding: 40px;

  h2{
    font-size: 48px;
    font-weight:800;
    text-transform: uppercase;
  }

  p{
    font-size: 16px;
    max-width: 60ch;
    text-align: center;
  }
`;

  export const DivServices = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #FFF;
  padding: 30px;
  gap: 50px;
  box-shadow: 8px  8px 8px 8px rgba(0.1, 0.1, 0.1, 0.1);
  margin-bottom: 20px;

  @media (max-width: 450px){
    display: grid;
  grid-template-columns:  1fr;
}
  `
  export const Service = styled.div`
  display: flex;
  gap: 25px;
  padding: 30px;

  img{
    width: 64px;
    height: 64px;
  }
  `

  export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

  h3{
    font-size: 24x;
    font-weight: 800;
    text-transform: uppercase;
  }
  p{
    font-size: 16px;
    max-width: 30ch;
    text-align: start;
  }
  `
