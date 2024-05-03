import styled from 'styled-components';

export const DivSlogan = styled.div`
  color:#FFF;
  margin: 20px auto;
  padding: 30px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  h1{
    font-size: 72px;
  text-transform: uppercase;
  max-width: 25ch;
  font-weight: 900;
}
p{
  font-size: 24px;
}

@media (max-width: 768px){
    h1{
      font-size: 55px;
    }
  }
`


export const DivButtons = styled.div`
display: flex;
gap: 40px;
`