import styled from 'styled-components';

export const StyledBookCard = styled.div`
  border-radius: 20px;
  width: 200px;
  height: 280px;
  overflow: hidden;
  position: relative;
  z-index: 1;

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 80%;

    .image {
      transition: var(--transition_2);
    }

    &:hover {
      .image {
        transform: scale(1.1);
        transition: var(--transition_2);
      }

      .hover-overlay {
        opacity: 1;
        background-color: #003362c0;
        transition: var(--transition_2);
      }
    }
  }

  .hover-overlay {
    transition: var(--transition_2);
    z-index: 3;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colorPrimary};
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
  }

  .rating-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .rating-icon {
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.colorSecondary};
  }

  .rating {
    font-size: 20px;
    color: ${({ theme }) => theme.whiteTLM};
    letter-spacing: 5px;
  }

  .book-title {
    color: ${({ theme }) => theme.whiteTLM};
    text-align: center;
    font-size: 20px;
  }

  .action-container {
    /* border: 1px solid red; */
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #dfdfdfb2;
  }

  .fav-button {
    cursor: pointer;
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  .fav-icon {
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: ${({ theme }) => theme.colorPrimary};
  }

  .button-container {
    display: flex;
  }

  .btn {
    background-color: ${({ theme }) => theme.colorPrimary};
    padding: 4px 8px;
    border-radius: 5px;

    p {
      color: ${({ theme }) => theme.whiteTLM};
    }
  }
`;
