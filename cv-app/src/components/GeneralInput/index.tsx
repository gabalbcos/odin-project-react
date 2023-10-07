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
    
      <div className={styles.form__field}>
        <label
        className={styles.form__label}>
            Name:
          <input
          className={styles.form__input}
          type="text"
          placeholder="Your name"
          value={formValues.name}
          onChange={handleInputChange}
          name="name"
          id="name"
          required
          />
          </label>
      </div>
      <div className={styles.form__field}>
        <label
        className={styles.form__label}>
          E-mail:
        <input
        className={styles.form__input}
        type="mail" 
        placeholder="Your e-mail"
        value={formValues.email}
        onChange={handleInputChange}
        name="email"
        required
        />
        </label>
        </div>
        <div className={styles.form__field}>
        <label
        className={styles.form__label}>
          Phone:
        <input
        className={styles.form__input}
        type="number" placeholder="Your phone"
        value={formValues.phone}
        onChange={handleInputChange}f
        name="phone"
        required
        />
        </label>
        </div>
        <div className={styles.form__buttons}>
          <button onClick={resetForm} className={styles.form__button}>Reset</button>
          <input type="submit" value="Submit" />
        </div>

  </form>
  );
}

export default GeneralInput;