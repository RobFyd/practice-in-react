import styled from "styled-components";
// import './App.css';

const Button = styled.button`
  border: 2px solid crimson;
  box-shadow: 0 0 4px black;
  padding: 10px;
  margin: 10px;
  background: white;
  color: crimson;
`;

function App() {
  return (
    <Button>Click me</Button>
  )
}

export default App;