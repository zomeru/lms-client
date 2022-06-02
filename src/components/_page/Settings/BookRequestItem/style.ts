import styled from 'styled-components';
import { colors } from '@styles/theme';

export const StyledBookRequestItem = styled.div`
  background-color: #d3d3d3;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  padding: 15px;

  .image-container {
    position: relative;
    width: 130px;
    height: 170px;
    border-radius: 15px;
    overflow: hidden;
  }

  .borrow-info {
    margin-left: 15px;
    width: 100%;
  }

  .book-lil-info {
    display: flex;
    margin-top: 5px;
  }

  .genre {
    margin-right: 15px;
  }

  .name {
    margin: 5px 0;
  }

  .date {
    margin-top: 5px;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colorPrimary};
    margin: 15px 0;
  }

  .separator {
    margin: 15px 0;
  }

  p {
    color: ${({ theme }) => theme.colorPrimary};
  }

  .action-container {
    /* background-color: red; */
  }

  .action-wrapper {
    width: max-content;
    margin-left: auto;
  }

  .action-btn {
    border: none;
    outline: none;
    padding: 5px 10px;
    font-size: 16px;
    color: ${({ theme }) => theme.whiteTLM};
    cursor: pointer;
    border-radius: 5px;

    :not(:last-child) {
      margin-right: 10px;
    }
  }

  .approve-btn {
    background-color: ${({ theme }) => theme.colorPrimary};
  }

  .reject-btn {
    background-color: ${colors.danger};
  }

  .status-wrapper {
    display: flex;
  }

  .status {
    margin-left: 5px;
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
