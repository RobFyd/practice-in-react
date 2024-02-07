import styled, { css } from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
  border: solid 2px lightblue;
  border-radius: 2px;
  padding: 5px;

  ${({ done }) =>
    done &&
    css`
      display: none;
    `}

  ${({ highLight }) =>
    highLight &&
    css`
      background-color: yellow;
    `}
`;

export const LightButton = styled.button`
  border-radius: 2px;
  border: 1px solid black;

  ${({ highLight }) =>
    highLight &&
    css`
      border-radius: 2px;
      border: 1px solid yellow;
      background-color: black;
    `}
`;

export const DoneButton = styled.button`
  border-radius: 2px;
  border: 1px solid black;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: #00d26a;
      border-radius: 2px;
      border: 1px solid black;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const DeleteButton = styled.button`
  background-color: #ffd0d0;
  border-radius: 2px;
  border: 1px solid red;

  &:hover {
    background-color: palevioletred;
    border-radius: 2px;
    border: 1px solid red;
  }

  &:active {
    background-color: crimson;
    border-radius: 2px;
    border: 1px solid crimson;
  }
`;
