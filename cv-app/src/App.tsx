import { useState } from 'react'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    margin: 3em;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  h1{
    color: red;
  }
`;
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle/>
        <h1>PUM</h1>
    </>
  )
}

export default App
