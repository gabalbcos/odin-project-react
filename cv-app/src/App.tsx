import { useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import GeneralInput from './components/GeneralInput';

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;

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
      <GeneralInput />
      <GeneralInput />
    </>
  )
}

export default App
