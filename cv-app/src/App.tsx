import { createGlobalStyle } from 'styled-components';
import GeneralInput from './components/GeneralInput';

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;

  }

  body{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
`;
function App() {

  return (
    <>
      <GlobalStyle/>
      <GeneralInput />
      <GeneralInput />
    </>
  )
}

export default App
