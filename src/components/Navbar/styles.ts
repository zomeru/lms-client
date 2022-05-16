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

  .profile-popover {
    position: relative;
  }

  .profile-popover-panel {
    position: absolute;
    z-index: 9999;
  }

  .profile-button {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;

    :hover {
      .profile-username {
        color: ${({ theme }) => theme.colorSecondary};
        transition: var(--transition_2);
      }
    }
  }

  .profile-button-container {
    display: flex;
    align-items: center;
  }

  .profile-image-wrapper {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    overflow: hidden;
    margin-right: 10px;
  }

  .profile-username {
    font-size: 16px;
    color: ${({ theme }) => theme.whiteTLM};
    transition: var(--transition_2);
  }

  .enter {
    transition: var(--transition_2);
  }

  .enter-from {
    opacity: 0;
    transform: translateY(10px);
  }

  .enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .leave {
    transition: var(--transition_2);
  }

  .leave-from {
    opacity: 1;
    transform: translateY(0);
  }

  .leave-to {
    opacity: 0;
    transform: translateY(10px);
  }

  .popover-panel-container {
    background-color: ${({ theme }) => theme.whiteTLM};
    padding: 14px;
    margin-top: 10px;
    border-radius: 10px;
    /* transform: translateX(-10px); */
    width: 150px;
    display: flex;
    flex-direction: column;
    z-index: 9999;
  }

  .panel-item {
    outline: none;
    border: none;
    font-size: 16px;

    cursor: pointer;

    :not(:last-child) {
      margin-bottom: 15px;
    }

    :hover {
      .panel-item-text {
        background-color: #dddddd;
        color: ${({ theme }) => theme.colorPrimary};
        transition: var(--transition_2);
      }
    }
  }

  .panel-item-text {
    border-radius: 10px;
    color: #757575;
    padding: 8px 15px;
    transition: var(--transition_2);
  }
`;
