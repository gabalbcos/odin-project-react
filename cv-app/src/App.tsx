
import GeneralInput from './components/GeneralInput';
import Education from './components/Education';
import { useState } from 'react';


function App() {
  const [GeneralInfo, setGeneralInfo] = useState({name: null, email: null, phone:null}); 
  return (
    <>

      <GeneralInput setGeneralInfo={setGeneralInfo} GeneralInfo={GeneralInfo}/>
      <Education/>
    </>
  )
}

export default App
