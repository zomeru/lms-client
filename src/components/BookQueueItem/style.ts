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

  .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100px; // some width
  }

  .approved {
    color: #0b9c45;
  }

  .rejected {
    color: #ff0000;
  }

  .cancelled {
    color: #ff0000;
  }

  .pending {
    color: #ffa500;
  }

  .returned {
    color: #20a6ff;
  }
`;
