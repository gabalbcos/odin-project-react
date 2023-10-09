import { useState } from "react";

function Education () {
  const [formValues, setFormValues] = useState({schoolName: "", area: "", type:"", startDate: "", endDate:""});  
  
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
      <h3>Education Info:</h3>
      <div>
        <form>
          <div class="">
            <label>
              School Name
            <input
          type="text"
          placeholder="School Name"
          value={formValues.schoolName}
          onChange={handleInputChange}
          name="name"
          id="name"
          required
          />
            </label>
          </div>
          <div class="">
            <label>
            Area of studies
            <input
          type="text"
          placeholder="Area of studies"
          value={formValues.area}
          onChange={handleInputChange}
          name="area"
          id="area"
          required
          />
            </label>
          </div>
          <div class="">
            <label>
            Education Type:
            <input
          type="text"
          placeholder="Education Type:"
          value={formValues.type}
          onChange={handleInputChange}
          name="type"
          id="type"
          required
          />
            </label>
            <div className="">
              <label>
                Start Date
                <input type="month"
                value={formValues.startDate}
                onChange={handleInputChange}
                name="start"
                id="start"
                required/>
              </label>
            </div>
            <div className="">
              <label>
                End Date
                <input type="month"
                value={formValues.endDate}
                onChange={handleInputChange}
                name="end"
                id="end"
                required/>
              </label>
            </div>
            
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
    </div>
  );
}

export default Education;