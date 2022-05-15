import styled from 'styled-components';

export const StyledTextInput = styled.div`
  display: flex;
  flex-direction: column;

  .label {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 3px;
  }

  .input {
    font-size: 16px;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colorPrimary};
  }
`;
