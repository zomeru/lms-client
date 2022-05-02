import styled from 'styled-components';

export const StyledSection = styled.section<{ bgColor?: string }>`
  /* background-color: ${({ theme }) => theme.colorPrimary}; */
  background-color: ${({ bgColor }) => bgColor};

  .section-container {
    margin: 0 auto;
    max-width: var(--max-width);
  }
`;
