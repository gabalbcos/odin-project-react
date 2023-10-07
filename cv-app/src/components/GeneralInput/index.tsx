import { useState } from "react";
import styles from "./GeneralInput.module.scss";

function GeneralInput () {
const [formValues, setFormValues] = useState({name: "", email: "", phone:""});  
const [GeneralInfo, setGeneralInfo] = useState({name: null, email: null, phone:null});  

const handleInputChange = (e: React.FormEvent<HTMLFormElement>) => {
  const { name, value } = e.target;
  setFormValues({
    ...formValues,
    [name]: value,
  });
  console.log(formValues);
};

// saving the data on GeneralInfo
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setGeneralInfo({
    name: formValues.name,
    email: formValues.email,
    phone: formValues.phone
  });
  console.log(GeneralInfo);
};
const resetForm = (e: React.FormEvent<HTMLFormElement>) => {
  setFormValues({name: "", email: "", phone: ""});
 
  console.log(formValues);
};


  return(
  <form className={styles.form} onSubmit={handleSubmit}>
    <button onClick={resetForm}>Reset</button>
      <label>
          Name:
        <input 
        type="text" 
        placeholder="Your name" 
        value={formValues.name}
        onChange={handleInputChange}
        name="name"
        id="name"
        required
        />
        </label>
        <label>
          E-mail:
        <input 
        type="mail" 
        placeholder="Your e-mail"
        value={formValues.email}
        onChange={handleInputChange}
        name="email"
        required
        />
        </label>
        <label>
          Phone:
        <input 
        type="number" placeholder="Your phone"
        value={formValues.phone}
        onChange={handleInputChange}f
        name="phone"
        required
        />
        </label>
        <input type="submit" value="Submit" />

  </form>
  );
}

export default GeneralInput;