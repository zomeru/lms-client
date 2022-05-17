import styled from 'styled-components';

import { colors } from '@styles/theme';

export const StyledLoader = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.white};
  display: grid;
  justify-items: center;
  align-items: center;

  .section {
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    justify-items: center;
    align-items: center;
  }

  .loader-cubes {
    position: relative;
    display: block;
    width: 4em;
    height: 4em;
  }

  .loader-cubes:before,
  .loader-cubes:after {
    position: absolute;
    content: '';
    top: calc(50% - 0.5em);
    left: calc(50% - 2em);
    display: block;
    border-radius: 2px;
    width: 1em;
    height: 1em;
    transform-origin: 200%;
    animation: cubes 1s infinite linear;
    opacity: 1;
  }

  .loader-cubes:before {
    background: #fdb515;
    animation-delay: -1s;
  }

  .loader-cubes:after {
    background: #003262;
    animation-delay: -0.5s;
  }

  @keyframes cubes {
    to {
      transform: rotate(359deg);
      opacity: 0;
    }
  }
`;
