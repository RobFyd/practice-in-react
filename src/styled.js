import styled from 'styled-components';
import Button from './button';

const StyledButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.colors.primaryColor};
  box-shadow: 0 0 4px black;
  padding: 10px;
  margin: 10px;
  background: white;
  color: ${({ theme }) => theme.colors.primaryColor};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
    margin: 0;
  }
`;

export { StyledButton };