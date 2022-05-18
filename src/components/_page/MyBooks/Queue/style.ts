import styled from 'styled-components';

export const StyledQueue = styled.div`
  .header {
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
    margin-top: 50px;
  }

  .item-container {
    margin: 50px auto;
  }

  .queue-item {
    margin: 0 auto;

    :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
