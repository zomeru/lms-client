import styled from 'styled-components';

export const StyledRequestPage = styled.div`
  display: flex;
  flex-direction: column;

  .header-label {
    font-size: 25px;
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
    margin-bottom: 20px;
  }

  .book-request-item {
    margin-bottom: 20px;

    /* :not(:last-child) {
      margin-bottom: 20px;
    } */
  }

  .no-requests {
    font-size: 25px;
    text-align: center;
  }
`;
