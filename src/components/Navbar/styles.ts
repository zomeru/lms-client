import styled from 'styled-components';

export const StyledNavbar = styled.header`
  height: var(--nav-height);
  background-color: ${({ theme }) => theme.colorPrimary};
`;

export const StyledNavItems = styled.nav`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--h-padding-md);
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 100%;

  .logo-container {
    /* width: 100px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    cursor: pointer;
  }

  .image-wrapper {
    width: 70px;
  }

  .logo {
    width: 100%;
    height: 100%;
  }

  .logo-text {
    font-size: 14px;
    color: ${({ theme }) => theme.whiteTLM};
  }

  .nav-links-container {
    display: flex;
  }

  .nav-link-items {
    :hover {
      color: ${({ theme }) => theme.colorSecondary};

      a,
      p {
        color: ${({ theme }) => theme.colorSecondary};
      }
    }

    :not(:last-child) {
      margin-right: 50px;
    }
  }

  .nav-links {
    color: ${({ theme }) => theme.whiteTLM};
  }

  .bgPrimary {
    background-color: ${({ theme }) => theme.colorPrimary};
  }

  .user-nav {
    display: flex;
    align-items: center;
  }

  .user-nav-item {
    :not(:last-child) {
      margin-right: 15px;
    }
  }

  .user-image-wrapper {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    overflow: hidden;
  }

  .user-link-items {
    :hover {
      color: ${({ theme }) => theme.colorSecondary};

      a,
      p {
        color: ${({ theme }) => theme.colorSecondary};
      }
    }
  }

  .logout-button {
    cursor: pointer;
  }
`;
