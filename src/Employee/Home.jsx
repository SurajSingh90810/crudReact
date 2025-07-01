/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { getStorageData, setStorageData } from "../Service/localStorage";
import { Button, Table } from "react-bootstrap";
import "./Home.css";
import { useNavigate } from "react-router";

function Home() {
  const [employees, setEmployees] = useState(getStorageData());
  const [search, setSearch] = useState()
  const [sortSearch, setSortSearch] = useState()
  const navigate = useNavigate();


  const handleEdit = (id) => {
    navigate(`/edit-employee/${id}`);
  };

  const handleDelete = (id) => {
    const deletes = employees.filter((emp) => emp.id != id);
    setEmployees(deletes);
    setStorageData(deletes);
  };



  const handleSearch = () => {
    const searches = employees.filter((emp => {
      return emp.fname == search || emp.gender == search
    }))
    setEmployees(searches)
    setSearch("")

    setSortSearch(searches)

  }

  const SortSearch = () => {
    let game = [...sortSearch].sort((a, b) => {
      return a.fname.localeCompare(b.fname)
    })
    setEmployees(game)
    console.log("Search Game", game)

  }

  const handleSorting = () => {
    let StorageData = getStorageData()
    const sorted = StorageData.sort((a, b) => {
      return a.fname.localeCompare(b.fname)
    }

    )
    setEmployees(sorted)
  }

  return (
    <div className="home-container">
      <div className="home-header">
        <Header />
      </div>

      <Button
        className="button"
        onClick={() => sortSearch ? SortSearch() : handleSorting()}
      >
        A-Z
      </Button>

      <div>
        <input
          type="text"
          className="input-field"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className="button search-button" onClick={handleSearch}>
          Search
        </Button>
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
