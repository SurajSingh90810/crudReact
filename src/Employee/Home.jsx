import React, { useState } from "react";
import Header from "./Header";
import { getStorageData, setStorageData } from "../Service/localStorage";
import { Button, Table } from "react-bootstrap";
import "./Home.css";
import { useNavigate } from "react-router";

function Home() {
  const [employees, setEmployees] = useState(getStorageData());
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/edit-employee/${id}`);
  };
  const handleDelete = (id) => {
    const deletes = employees.filter((emp) => emp.id != id);
    setEmployees(deletes);
    setStorageData(deletes);
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <Header />
      </div>
      {employees.length > 0 ? (
        <Table className="employee-table" striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Mobile No</th>
              <th>Role</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.fname}</td>
                <td>{emp.email}</td>
                <td>{emp.gender}</td>
                <td>{emp.mobileNo}</td>
                <td>{emp.role}</td>
                <td>
                  <Button
                    className="action-button edit-button"
                    onClick={() => handleEdit(emp.id)}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    className="action-button delete-button"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h1 className="no-data-message">No Data Found</h1>
      )}
    </div>
  );
}

export default Home;
