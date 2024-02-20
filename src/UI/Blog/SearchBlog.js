import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SearchBlog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='container row text-center pb-3'>
    <div className="col-6">
    <div className='input-group'>
      <input
        type="text"
        className="form-control"
        aria-label="Text input with segmented dropdown button"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="button" className="btn btn-outline-secondary" onClick={handleSearch}>Search</button>
    </div>
    </div>

    <div className='col-6'>
        <Link to='/blog/addBlog'><button type="button" className="btn btn-outline-secondary" onClick={handleSearch}>Write Blog</button></Link>
    </div>

    </div>
  );
};

export default SearchBlog;
