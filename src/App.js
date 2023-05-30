import styled, { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "blue",
  },
  breakpoints: {
    mobile: 767
  },
};

const Button = ({ className }) => (
  <button className={className}>
    New Btn
  </button>
);

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton>Click me</StyledButton>
    </ThemeProvider>
  )
}

export default App;