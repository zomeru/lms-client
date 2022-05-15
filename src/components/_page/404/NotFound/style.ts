import styled from 'styled-components';

export const StyledNotFound = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header-1 {
    color: ${({ theme }) => theme.colorPrimary};
    font-size: 180px;
    margin-bottom: -30px;
  }

  .header-2 {
    color: ${({ theme }) => theme.colorPrimary};
    font-size: 50px;
  }

  .not-found-text {
    margin: 20px 0;
    font-weight: 600;
  }
`;
