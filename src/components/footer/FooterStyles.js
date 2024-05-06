import styled from 'styled-components';

export const FooterB = styled.footer`
  background-color: #000;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;

    p{
        font-size: 16px;
    }

  ul{
    display: flex;
   gap: 20px;
  }

  ul li{
    list-style-type: none;
    font-size: 16px;
  }

  @media (max-width: 450px){
    flex-direction: column;
    ul{
      padding: 0;
    }
  }
`;