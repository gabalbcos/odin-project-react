import { useState } from "react";


export default function GeneralInput () {
const [GeneralInfo, setGeneralInfo] = useState({name: null, email: null, phone:null});  
  
  return(
  <form>
      <label>
          Name:
        <input type="text" placeholder="Your name"/>
        </label>
        <label>
          E-mail:
        <input type="mail" placeholder="Your e-mail"/>
        </label>
        <label>
          Phone:
        <input type="mail" placeholder="Your phone"/>
        </label>
        <input type="submit" value="Submit" />

  </form>
  );
}