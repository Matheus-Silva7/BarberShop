import styled from 'styled-components';

export const DivInfo = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`;


export const IconInfo = styled.h2`
font-size: 35px;
`;

export const InfoTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  padding: 8px;
  margin-bottom: 15px;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px; 
    left: 0px;
    width: 100%;
    height: 5px;
    background-color: #DEC7A6; 

  }
`;

export const DescTitle = styled.h4`
  font-size: 18px;
  max-width: 20ch;
  line-height: 1.5;
  text-align: center;
`

