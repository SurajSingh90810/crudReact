/* eslint-disable no-unused-vars */
import { useState } from "react";
import { getStorageData, setStorageData } from "../Service/localStorage";
import generateUniqueId from "generate-unique-id";
import { Link, useNavigate } from "react-router-dom";
import "./AddEmp.css";

const AddEmployee = () => {
  const navigate = useNavigate();
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
  const [employees,setEmployee] = useState(getStorageData());

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId = generateUniqueId({ length: 6, useLetters: false });
    inputForm.id = uniqueId;
    const getData = getStorageData();
    const allData = [...getData, inputForm];
    setStorageData(allData);
    setInputForm(intialState);
    navigate("/");
  };

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
                required
              />
              Male
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="gender"
                value="Female"
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

export default AddEmployee;
