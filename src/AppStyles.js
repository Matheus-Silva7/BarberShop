import styled from 'styled-components';


export const ContainerInfo = styled.div`
  display: flex;
 justify-content: space-around;
  padding: 30px;
  background-color: #FFF;
  max-width: 1200px;
  margin: 30px auto;
  border-radius: 10px;

  @media (max-width: 820px){
    max-width: 680px;
  }

  @media (max-width: 450px){
    max-width: 350px;
    gap: 8px;
  }
`;