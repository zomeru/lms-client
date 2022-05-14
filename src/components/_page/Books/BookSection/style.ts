import styled from 'styled-components';

export const StyledBookSection = styled.div`
  padding: 70px var(--h-padding-md);
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .header-title {
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colorPrimary};
  }

  .book-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    justify-items: center;
    grid-row-gap: 30px;
  }

  .load-more {
    border-radius: 8px;
    padding: 10px 20px;
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.colorPrimary};
    color: ${({ theme }) => theme.whiteTLM};
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 20px;
  }
`;
