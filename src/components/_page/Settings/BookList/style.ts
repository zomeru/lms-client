import styled from 'styled-components';

export const StyledBookList = styled.div`
  display: flex;
  flex-direction: column;

  .book-list-item {
    width: 100%;
    margin: 0 auto;

    :not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .book-item-actions {
  }

  .action-btn {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.colorPrimary};
    font-weight: 600;

    :not(:last-child) {
      margin-right: 10px;
    }
  }

  .add-btn {
    font-size: 25px;
    margin-bottom: 20px;
    align-self: flex-end;
  }
`;
