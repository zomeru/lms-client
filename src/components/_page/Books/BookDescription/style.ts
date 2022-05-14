import styled from 'styled-components';
import { colors } from '@styles/theme';

export const StyledBookDescription = styled.div`
  padding: 0 var(--h-padding-md);

  .book-des-container {
    max-width: 1200px;
    /* height: 600px; */
    height: auto;
    background-color: ${colors.lightGray};
    margin: var(--h-padding-md) auto;
    border-radius: 40px;
    padding: var(--h-padding-xs);
    display: flex;
    justify-content: space-between;
  }

  .image-container {
    width: 45%;
    height: 550px;
    display: flex;
    flex-direction: column;
  }

  .borrow-button {
    margin-top: 40px;
  }

  .des-container {
    width: 52%;
    height: 100%;
    color: ${({ theme }) => theme.blackTLM};
  }

  .image-wrapper {
    height: 85%;
    border-radius: 40px;
    overflow: hidden;
    position: relative;
  }

  .book-title {
    color: ${({ theme }) => theme.colorPrimary};
    font-size: 28px;
  }

  .book-author {
    color: ${({ theme }) => theme.colorPrimary};
    font-size: 20px;
    font-weight: 400;
  }

  .book-genre {
    color: ${({ theme }) => theme.colorPrimary};
  }

  .book-avail-copies {
    color: ${({ theme }) => theme.colorPrimary};
  }

  .book-des-header {
    margin-top: 30px;
    font-size: 20px;
    color: ${({ theme }) => theme.colorPrimary};
  }
`;
