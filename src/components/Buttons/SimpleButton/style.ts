import styled from 'styled-components';
import { colors } from '@styles/theme';

export const StyledSimpleButton = styled.button<{ disabled?: boolean }>`
  border-radius: 8px;
  padding: 10px 20px;
  outline: none;
  border: none;
  background-color: ${({ theme, disabled }) =>
    disabled ? colors.disabledGray : theme.colorPrimary};
  color: ${({ theme }) => theme.whiteTLM};
  font-size: 16px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin: 0 auto;
  margin-top: 20px;
`;
