import styled from 'styled-components';

export const DivInfo = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;

 h2{
  font-size: 35px;
 }

 h3{
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  padding: 8px;
  margin-bottom: 15px;
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

 h4{
  font-size: 18px;
  max-width: 20ch;
  line-height: 1.5;
  text-align: center;
 }
`;


