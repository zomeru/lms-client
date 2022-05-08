import styled from 'styled-components';

export const StyledBookContainer = styled.div`
  padding: 70px var(--h-padding-md);
  max-width: 1500px;
  margin: 0 auto;

  .header-title {
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colorPrimary};
  }

  .top-book-container {
    margin-bottom: 80px;
  }

  .new-book-container {
  }

  .book-container {
    display: flex;
    justify-content: space-between;
  }
`;
