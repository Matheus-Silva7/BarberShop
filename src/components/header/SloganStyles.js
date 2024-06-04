import styled from "styled-components";

export const DivSlogan = styled.div`
  height: 100%;
  width: 100%;

  .into-img {
    width: 100%;
    height: 80vh;
    background-size: cover;
    background-position: center;
    object-fit: cover;
  }

  .content {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }

  .content .title {
    color: #fff;
    font-weight: 800;
    max-width: 25ch;
    text-align: center;
    font-size: 4rem;
    text-transform: uppercase;
  }

  .content p {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
  }

  .div-bnt{
    display: flex;
    gap: 20px;
  }

  @media screen and (max-width: 1040px) {
    .content .title {
      font-size: 3rem;
    }
    .content p {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 640px) {
    .content{
      width: 95%;
    }

    .content .title {
      font-size: 2.8rem;
    }

    .content .btn {
      margin: 0.3rem;
    }

    .content p {
      font-size: 1.4rem;
    }
  }
`;
