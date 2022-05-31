import styled from 'styled-components';
import { colors } from '@styles/theme';

export const StyledAddBook = styled.form`
  .header {
    display: flex;
    align-items: center;
  }

  .back-btn {
    outline: none;
    border: none;
    cursor: pointer;
    margin-right: 20px;
  }

  .back-btn-icon {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.colorPrimary};
  }

  .header-title {
    font-size: 30px;
    color: ${({ theme }) => theme.colorPrimary};
  }

  .image-container {
    position: relative;
    width: 170px;
    height: 200px;
  }

  .add-img {
    width: 170px;
    height: 200px;
    background-color: ${({ theme }) => theme.colorPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .add-img-btn {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: ${({ theme }) => theme.whiteTLM};
    font-size: 16px;
  }

  .input-container {
    width: 500px;
  }

  .hidden-img-input {
    display: none;
  }

  .add-book-btn {
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colorPrimary};
    color: ${({ theme }) => theme.whiteTLM};
    font-size: 20px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .spacing {
    margin-bottom: 20px;
  }

  .error-text {
    color: ${colors.danger};
    margin-bottom: 10px;
  }
`;
