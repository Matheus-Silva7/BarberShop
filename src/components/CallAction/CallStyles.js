import styled from 'styled-components';
import backgroundImg from "../../assets/man-barbershop.jpg"


export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  align-items: center;
  background: url(${backgroundImg});
  height: 70vh;
  background-size: cover;
  margin: 100px 0;

  h2{
    font-size: 55px;
  line-height: 1.3;
  color: #FFF;
  font-weight: 800;
  text-transform: uppercase;
  max-width: 25ch;
  text-align: center;
  }
`;
