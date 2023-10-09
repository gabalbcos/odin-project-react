import { createGlobalStyle } from 'styled-components';
import GeneralInput from './components/GeneralInput';
import { useState } from 'react';
const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;

  }

  body{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
`;
function App() {
  const [GeneralInfo, setGeneralInfo] = useState({name: null, email: null, phone:null}); 
  return (
    <>
      <GlobalStyle/>
      <GeneralInput setGeneralInfo={setGeneralInfo} GeneralInfo={GeneralInfo}/>
      <GeneralInput setGeneralInfo={setGeneralInfo} GeneralInfo={GeneralInfo}/>
    </>
  )
}

export default App
