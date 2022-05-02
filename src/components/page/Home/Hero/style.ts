import styled from 'styled-components';

export const StyledHero = styled.div<{ height?: number | string }>`
  padding: 0 var(--h-padding-md);
  display: flex;
  height: ${({ height }) => height};

  .hero-header-container {
    width: 100%;
    margin: auto 0;
    padding-right: 100px;

    p,
    h1 {
      color: ${({ theme }) => theme.whiteTLM};
    }

    .hero-header {
      font-size: 60px;
      line-height: 1;
      font-weight: 800;
      /* padding-right: 50px; */
    }

    .hero-description {
      margin-top: 40px;
      /* padding-right: 30px; */
    }
  }

  .hero-image-container {
    width: 80%;
    /* background-color: yellow; */
    margin: auto auto;
  }
`;
