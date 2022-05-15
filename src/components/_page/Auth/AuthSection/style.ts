import styled from 'styled-components';

export const StyledAuthSection = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: flex;

  .image-container {
    width: 50%;
    position: relative;
  }

  .form-container {
    width: 50%;
    padding: 50px 0;
    padding-left: 50px;
  }

  .form-header {
    font-size: 30px;
    color: ${({ theme }) => theme.colorPrimary};
    margin-bottom: 20px;
  }

  .input-container {
    width: 400px;
  }

  .input {
    :not(:last-child) {
      margin-bottom: 15px;
    }
  }

  .auth-text {
    font-size: 14px;
    font-weight: 600;
    margin-top: 15px;
    color: ${({ theme }) => theme.blackTLM};
  }

  .auth-text-link {
    color: ${({ theme }) => theme.colorPrimary};
    cursor: pointer;
  }
`;
