/* eslint-disable no-unused-vars */
import { useState } from "react";
import { getStorageData, setStorageData } from "../Service/localStorage";


const AddEmployee = () => {

  const intialState = {
    fname: "",
    email: "",
    gender: "",
    password: "",
    role: "",
    mobileNo: "",
  };

  const [inputForm, setInputForm] = useState(intialState);
  const [employees,setEmployees]=useState(getStorageData())

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value
    });
   
  };

const handleSubmit = (e) => {
    e.preventDefault();
     const getData=getStorageData()
     const allData=[...getData,inputForm]
     setStorageData(allData)
     setEmployees(allData)
    setInputForm(intialState);
    
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <label>
          Full Name:
          <input
            type="text"
            name="fname"
            value={inputForm.fname}
            onChange={handleChanged}
            placeholder="Enter Your Full Name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={inputForm.email}
            onChange={handleChanged}
            placeholder="Enter Your Email"
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={inputForm.password}
            onChange={handleChanged}
            placeholder="Enter Your Password"
          />
        </label>

        <label>
          Gender:
          <div>
            <label>
              <input
                type="radio"
                name="gender" 
                value="Male"
              
                onChange={handleChanged}
              />
              Male
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input
                type="radio"
                name="gender"
                value="Female"
                
                onChange={handleChanged}
              />
              Female
            </label>
          </div>
        </label>

        <label>
          Mobile No:
          <input
            type="text"
            name="mobileNo"
            value={inputForm.mobileNo}
            onChange={handleChanged}
            placeholder="Enter Your Mobile No"
          />
        </label>

        <label>
          Role:
          <select name="role" value={inputForm.role} onChange={handleChanged}>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="HR Manager">HR Manager</option>
            <option value="Sales manager">Sales manager</option>
            <option value="Employee">Employee</option>
          </select>
        </label>

        <button type="submit">Add Employee</button>
      </form>



<div>
     {
        employees.map((emp,index)=>(
        
            <div key={index}>{emp.fname} {emp.email}</div>
            
        ))
     }</div>
    </div>
  );
};

export default AddEmployee;
