import styled, { css } from "styled-components";

const Button = styled.button`
  border: 2px solid crimson;
  box-shadow: 0 0 4px black;
  padding: 10px;
  margin: 10px;
  background: white;
  color: crimson;
  text-decoration: none;
`;

function App() {
  return (
    <>
      <Button>Click me</Button>
      <Button as="a" href="https://google.com">Google</Button>
    </>
  )
}

export default App;