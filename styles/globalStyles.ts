import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './theme';
import Variables from './variables';

export const GlobalStyles = createGlobalStyle<ThemeProps>`
  ${Variables};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  //? Scrollbar styles 
  html {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colorPrimary}; 
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colorPrimary};
    border-radius: 10px;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.3;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }

  a, p, h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.blackTLM};
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul, li, ol {
    list-style: none;
  }

  .links {
    /* color: ${({ theme }) => theme.textMain}; */
    position: relative;

    :hover ::after {
      width: 100%;
    }

    ::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: -3px;
      height: 2px;
      border-radius: 1px;
      width: 0px;
      background-color: ${({ theme }) => theme.colorSecondary};
      transition: var(--transition_2);
    }
  }
`;
