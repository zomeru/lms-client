import styled from 'styled-components';

export const StyledRequestHistory = styled.div`
  display: flex;
  flex-direction: column;

  .header-label {
    font-size: 25px;
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
    margin-bottom: 20px;
  }

  .book-list-item {
    width: 100%;
    margin: 0 auto;

    :not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .book-item-actions {
  }
`;
