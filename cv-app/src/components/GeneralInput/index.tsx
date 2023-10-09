import { useState } from "react";
import styles from "./GeneralInput.module.scss";

function GeneralInput ({setGeneralInfo, GeneralInfo}) {
const [formValues, setFormValues] = useState({name: "", email: "", phone:""});  
let presentInfo = GeneralInfo;

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setGeneralInfo({
    name: formValues.name,
    email: formValues.email,
    phone: formValues.phone
  });
  console.log(presentInfo);
};

const handleInputChange = (e: React.FormEvent<HTMLFormElement>) => {
  const { name, value } = e.target;
  setFormValues({
    ...formValues,
    [name]: value,
  });
  console.log(formValues);
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
          <input className={styles.form__submit} type="submit" value="Submit" />
        </div>

  </form>
  );
}

export default GeneralInput;