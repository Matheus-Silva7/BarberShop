import styled from "styled-components";

export const SectionReview = styled.section`
  width: 100%;
  margin: 70px 0;

  @media (max-width: 820px) {
    gap: 15px;
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }

  .container-users {
    width: 80%;
    margin: 50px auto;
  }

  .slick-slide > div {
    margin: 0 15px;
  }
  .slick-list {
    margin: 0 -15px;
  }
`;


export const DivCardUser = styled.div`
  background-color: transparent;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  overflow: hidden;

  img {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }

  .img-user{
    height: 100px;
    border-radius: 100%;
  }

  h3 {
    margin: 10px 0;
  }

  p.review-user {
    margin: 0 auto;
    max-width: 30ch;
    font-size: 14px;
    color: #666;
  }

  h4.user-name {
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;

  h2 {
    font-size: 92px;
    font-weight: 700;
  }

  h3 {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
  }

  p {
    font-size: 24px;
  }

  .logo-icon {
    width: 48px;
    height: 48px;
  }

  &.Containe-user {
    border: solid 1px #dec7a6;
    padding: 30px;
    gap: 15px;
  }

  .review-user {
    max-width: 55ch;
    font-size: 16px;
    text-align: center;
    line-height: 1.5;
  }

  .user-name {
    font-size: 16px;
    text-transform: uppercase;
  }

  @media (max-width: 820px) {
    h2 {
      font-size: 70px;
    }
    h3 {
      font-size: 22px;
    }
    p {
      font-size: 18px;
    }
  }
`;
