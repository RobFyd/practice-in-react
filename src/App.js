import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { StyledButton } from "./styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton></StyledButton>
    </ThemeProvider>
  )
}

export default App;