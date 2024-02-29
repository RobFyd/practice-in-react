import Section from "../../common/Section";
import { ThemeProvider } from "styled-components";
import { Button } from "./styled";
import { PrimaryButton } from "./styled";
import { StyledButton } from "./styled";
import { theme } from "./styled";

export default () => (
  <>
    <Section title="Buttons" stats={<div className="buttons"></div>} />
    <ThemeProvider theme={theme}>
      <Button>Styled button</Button>
      <Button primary>Main button</Button>
      <Button>Styled button</Button>
      <PrimaryButton>Primary button</PrimaryButton>
      {/* as="a" - change tag from <button> to <a></a> */}
      <Button as="a" href="https://google.com">
        Hyperlink as button
      </Button>
      <StyledButton>Styled button</StyledButton>
    </ThemeProvider>
  </>
);

