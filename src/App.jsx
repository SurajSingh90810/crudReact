import React from "react";
import AddEmployee from "./Employee/AddEmp";
import Home from "./Employee/Home";
import { Route, Routes } from "react-router";
import EditEmp from "./Employee/EditEmp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit-employee/:id" element={<EditEmp />} />
      </Routes>
    </div>
  );
}

export default App;
