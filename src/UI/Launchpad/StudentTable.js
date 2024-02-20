import React, { useState } from 'react';

const StudentTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchField, setSearchField] = useState('name');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredData = data.filter((student) =>
    student[searchField].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='row'>
      <div className="col-6 mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        </div>
        <div className='col-2'>
        <select className="col-4 form-select mb-2" value={searchField} onChange={handleSelectChange}>
          <option value="name">Name</option>
          <option value="branch">Branch</option>
          <option value="year">Year</option>
          <option value="company">Company Name</option>
        </select>
      </div>
      </div>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Branch</th>
            <th>Year</th>
            <th>Company Name</th>
            <th>Package</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.year}</td>
              <td>{student.company}</td>
              <td>{student.package}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
