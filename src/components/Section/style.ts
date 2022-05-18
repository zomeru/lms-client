import styled from 'styled-components';

export const StyledSection = styled.section<{
  bgColor?: string;
  height?: number | string;
  minHeight?: number | string;
}>`
  /* background-color: ${({ theme }) => theme.colorPrimary}; */
  background-color: ${({ bgColor }) => bgColor};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};

  .section-container {
    margin: 0 auto;
    max-width: var(--max-width);
    height: 100%;
  }
`;
