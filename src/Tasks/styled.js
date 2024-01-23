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
