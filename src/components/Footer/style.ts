import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 200px;
  background-color: ${({ theme }) => theme.colorPrimary};

  div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.whiteTLM};
  }
`;
