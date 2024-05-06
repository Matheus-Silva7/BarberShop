import styled from 'styled-components';

export const FormC = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 15px;
  width: 40%;
  background-color: #FFF;
  color: #000;
  padding: 30px;
  margin: 20px;

  label{
    width: 100%;
    align-self: flex-start;
    transition: 0.15s linear;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
  }


  input, textarea{
    font-size: 16px;
    padding: 8px;
    width: 100%;
    border: none;
    border-color: #000;
    border-bottom: solid 2px;
    transition: 0.15s linear;
    font-family: sans-serif;
  }
  textarea{
    height: 100px;
    resize: none; 
    font-family: sans-serif;
  }
  input:focus, 
  textarea:focus{
    outline: none;
    border-color: #DEC7A6;
  }

  @media (max-width: 820px){
  width: 100%;
  }
`;