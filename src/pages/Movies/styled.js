import styled from 'styled-components';
import * as colors from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    width: 350px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
  button {
    height: 40px;
    width: 150px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin: 5px 40px 0px 40px;
    float: right;
  }
  div {
    float: right;
  }
`;

export const PageTitle = styled.div`
  h1 {
    color: #000;
    text-align: center;
    padding: 20px 0;
  }
  p {
    color: #000;
    text-align: center;
    padding: 10px 0;
  }
`;

export const MovieTitle = styled.div`
  h1 {
    color: black;
    padding: 20px 0;
  }
  h3 {
    color: black;
  }
  p {
    color: black;
    padding: 20px 0;
    margin: 10px;
  }
  img {
    width: 200px;
    height: 300px;
    display: flex;
    float: right;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: stretch;
    padding: 5px 0;
  }
  .isFavorite {
    background: green;
  }
  /*button {
    background: green;
  }*/
`;
