import styled from 'styled-components';

export const StyledFooter = styled.footer`
  /* height: 200px; */
  background-color: ${({ theme }) => theme.colorPrimary};

  .footer-container {
    height: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--h-padding-md);
  }

  .footer-link-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .link-wrapper {
    display: flex;
    flex-direction: column;
  }

  .footer-title {
    font-size: 20px;
    color: ${({ theme }) => theme.whiteTLM};
    margin-bottom: 15px;
  }

  .link-list {
    p {
      color: ${({ theme }) => theme.whiteTLM};
    }

    :not(:last-child) {
      margin-bottom: 10px;
    }
  }

  .footer-link {
    color: ${({ theme }) => theme.whiteTLM};
    transition: var(--transition_2);

    :hover {
      color: ${({ theme }) => theme.colorSecondary};
      transition: var(--transition_2);
    }
  }

  .yellow-line {
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colorSecondary};
    margin: var(--h-padding-md) 0;
  }

  .copyright {
    text-align: center;
    color: ${({ theme }) => theme.whiteTLM};
  }
`;
