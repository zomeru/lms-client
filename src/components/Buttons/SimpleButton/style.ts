import styled from 'styled-components';

export const StyledSimpleButton = styled.button`
  border-radius: 8px;
  padding: 10px 20px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colorPrimary};
  color: ${({ theme }) => theme.whiteTLM};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 20px;
`;
