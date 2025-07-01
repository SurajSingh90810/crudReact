/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getStorageData, setStorageData } from "../Service/localStorage";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./AddEmp.css";

const EditEmp = () => {
  const navigate = useNavigate();
  const {id}=useParams();
  const intialState = {
    id: "",
    fname: "",
    email: "",
    gender: "",
    password: "",
    role: "",
    mobileNo: "",
  };

  const [inputForm, setInputForm] = useState(intialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     let empData = getStorageData();

    let updateData = empData.map(emp => {
        if(emp.id == id){
            return inputForm
        }else{
            return emp
        }
    })

    setStorageData(updateData);
    setInputForm(intialState);
    navigate("/");
  };

  useEffect(()=>{
    const data=getStorageData()
    const EmployessData=data.find((emp=>emp.id==id))
    setInputForm(EmployessData)
  },[id])

  return (
    <div className="add-employee-container">
      <h1 className="add-employee-title">Add Employee</h1>
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fname"
            value={inputForm.fname}
            onChange={handleChanged}
            placeholder="Enter Your Full Name"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={inputForm.email}
            onChange={handleChanged}
            placeholder="Enter Your Email"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={inputForm.password}
            onChange={handleChanged}
            placeholder="Enter Your Password"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChanged}
                checked={inputForm.gender=="Male"?true:false}
                required
              />
              Male
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={inputForm.gender=="Female"?true:false}
                onChange={handleChanged}
              />
              Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Mobile No:</label>
          <input
            type="text"
            name="mobileNo"
            value={inputForm.mobileNo}
            onChange={handleChanged}
            placeholder="Enter Your Mobile No"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Role:</label>
          <select
            name="role"
            value={inputForm.role}
            onChange={handleChanged}
            className="form-control"
            required
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="HR Manager">HR Manager</option>
            <option value="Sales manager">Sales manager</option>
            <option value="Employee">Employee</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Add Employee
        </button>
      </form>

      <Link to={"/"} className="home-link">
        ← Back to Home
      </Link>
    </div>
  );
};

export default EditEmp;
