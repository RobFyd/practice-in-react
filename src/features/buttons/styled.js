import styled, { css } from "styled-components";

///////////////////styled-component//////////////////////////////////////////////////

export const Button = styled.button`
  border: 2px solid black;
  padding: 20px;
  margin: 20px;
  background: #ffffff;
  box-shadow: 0 0 5px 2px black;
  color: ${({ theme }) => theme.colors.primaryColor};
  cursor: pointer;

  ${({ primary }) =>
    primary &&
    css`
      background: ${({ theme }) => theme.colors.secondaryColor};
      color: wheat;

      &:hover {
        background: papayawhip;
        color: darkblue;
      }
    `}
`;

export const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.colors.primaryColor};
  color: whitesmoke;

  &:hover {
    background: darkgoldenrod;
    color: white;
  }
`;

//////
const Button2 = ({ className }) => (
  <button className={className}>Button 2</button>
);

export const StyledButton = styled(Button2)`
  border: 2px solid black;
  padding: 20px;
  margin: 20px;
  background: yellow;
  box-shadow: 0 0 5px 2px black;
  color: black;
  cursor: pointer;

  &:hover {
    background: yellowgreen;
    color: darkblue;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

//////
export const theme = {
  colors: {
    primaryColor: "darkblue",
    secondaryColor: "crimson",
  },
  breakpoints: {
    mobile: 767,
    pc: 1024,
  },
};