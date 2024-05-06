import styled from 'styled-components';

export const SectionReview = styled.section`
display: flex;
justify-content: space-evenly;
align-items: center;
margin: 70px 40px;
@media (max-width:820px){
    gap: 15px;
  }

  @media (max-width:450px){
    flex-direction: column;
  }

`

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;

  h2{
    font-size: 92px;
    font-weight: 700;
  }

  h3{
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
  }
  
  p{
    font-size: 24px;
  }

  .logo-icon{
    width: 48px;
    height: 48px;
  }

  &.Containe-user{
    border: solid 1px #DEC7A6;
    padding: 30px;
    gap: 15px;
  }

  .review-user{
    max-width: 55ch;
    font-size: 16px;
    text-align: center;
    line-height: 1.5;
  }

  .user-name{
    font-size: 16px;
    text-transform: uppercase;
  }

  @media (max-width: 820px){
    h2{
      font-size: 70px;
    }
    h3{
      font-size: 22px;
    }
    p{
      font-size: 18px;
    }
  }
`;