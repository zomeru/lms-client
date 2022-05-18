import styled from 'styled-components';

export const StyledBookQueueItem = styled.div`
  background-color: #d3d3d3;
  height: 100px;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  align-items: center;
  padding: 10px;

  .image-wrapper {
    position: relative;
    height: 100%;
    width: 80px;
    overflow: hidden;
    border-radius: 8px;
  }

  .borrowed {
    color: #0b9c45;
  }

  .denied {
    color: #ff0000;
  }

  .pending {
    color: #ffa500;
  }
`;
