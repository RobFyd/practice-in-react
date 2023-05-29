import styled, { css } from "styled-components";
// import './App.css';

const Button = styled.button`
  border: 2px solid crimson;
  box-shadow: 0 0 4px black;
  padding: 10px;
  margin: 10px;
  background: white;
  color: ${({ color }) => color || "crimson"};
`;

function App() {
  return (
    <>
      <Button>Click me</Button>
      <Button>Click me</Button>
      <Button color="blue">Main button</Button>
    </>
  )
}

export default App;