import styled from 'styled-components';

export const StyledHero = styled.div`
  padding: 0 calc(var(--h-padding-md) + 80px);
  display: flex;
  min-height: 500px;
  height: 100%;

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
    }

    .hero-description {
      margin-top: 40px;
    }
  }

  .hero-image-container {
    width: 80%;
    height: 100%;
    margin: auto auto;
    position: relative;

    .hero-image-wrapper {
      width: 100%;
      /* height: auto; */
      height: 100%;
    }
  }
`;
