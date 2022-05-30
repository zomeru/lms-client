import styled from 'styled-components';

export const StyledSidebar = styled.div`
  width: 25%;

  .sb-btn {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;

    :not(:last-child) {
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      font-weight: 600;

      transition: var(--transition_2);
    }

    :hover p {
      color: ${({ theme }) => theme.colorSecondary};
      transition: var(--transition_2);
    }
  }

  .sb-btn-active {
    text-decoration: underline;
    -webkit-text-decoration-color: ${({ theme }) =>
      theme.colorSecondary}; /* Safari */
    text-decoration-color: ${({ theme }) => theme.colorSecondary};
  }

  .role-header {
    text-align: center;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colorPrimary};
  }

  .role-section {
    display: flex;
    flex-direction: column;

    :not(:last-child) {
      margin-bottom: 50px;
    }
  }
`;
