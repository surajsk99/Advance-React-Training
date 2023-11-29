import React, { useState, useEffect } from "react";
import "./Employee.css";

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="employee-list-container">
      <h1>Employee Details</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.employee_name}</td>
              <td>{employee.employee_age}</td>
              <td>{employee.employee_salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
