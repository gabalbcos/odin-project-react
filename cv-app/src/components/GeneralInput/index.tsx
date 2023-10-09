import { useState } from "react";

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
  <div className="">
    <h3>Personal Info:</h3>
    <form  onSubmit={handleSubmit}>
    
        <div >
          <label
          >
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
        </div>
        <div className="row">
          <label
          className="">
            E-mail:
          <input
          className=""
          type="mail"
          placeholder="Your e-mail"
          value={formValues.email}
          onChange={handleInputChange}
          name="email"
          required
          />
          </label>
          </div>
          <div className="">
          <label
          className="" >
            Phone:
          <input
          className=""
          type="number" placeholder="Your phone"
          value={formValues.phone}
          onChange={handleInputChange}f
          name="phone"
          required
          />
          </label>
          </div>
          <div className="row ">
            <div className="col-md-6 ">
               <button className="btn btn-delete " onClick={resetForm}>Reset</button>
            </div>
            <div className="col-md-6">
               <input className="btn btn-info" type="submit" value="Submit" />
            </div>
          </div>
    </form>
  </div>
  );
}

export default GeneralInput;