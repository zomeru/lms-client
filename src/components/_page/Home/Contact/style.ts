import styled from 'styled-components';

export const StyledContact = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 150px;
  margin-top: 50px;

  .header-title {
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colorPrimary};
  }
`;

export const StyledContactForm = styled.form`
  width: 100%;
  height: 550px;
  border-radius: 30px;
  overflow: hidden;
  display: flex;

  .image-container {
    height: 100%;
    width: 50%;
    position: relative;
  }

  .input-container {
    height: 100%;
    width: 50%;
    background-color: ${({ theme }) => theme.colorPrimary};
    display: flex;
    flex-direction: column;
    padding: 25px 50px;
    color: ${({ theme }) => theme.whiteTLM};
    justify-content: space-evenly;

    .contact-input-header {
      font-size: 28px;
      font-weight: 600;
      color: ${({ theme }) => theme.whiteTLM};
    }
    .input-wrapper {
      display: flex;
      flex-direction: column;
    }

    .input-label {
      font-weight: 500;
    }

    .input-text {
      font-size: 16px;
      padding: 8px;
      margin-bottom: 10px;
      margin-top: 3px;
      border-radius: 5px;
      font-weight: 500;
      outline: none;
      border: none;
    }

    .submit-button {
      padding: 10px 0;
      border-radius: 5px;
      font-size: 18px;
      color: ${({ theme }) => theme.colorPrimary};
      font-weight: 600;
      border: none;
    }
  }
`;
