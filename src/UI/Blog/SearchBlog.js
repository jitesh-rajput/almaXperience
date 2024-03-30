import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const SearchBlog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearch = () => {
    console.log(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='container row text-center pb-3'>
    <div className='col-4'>
    <Form>
        <Form.Group controlId="formCategory">
          <Form.Select value={category} onChange={handleCategoryChange}>
            <option value="">Recommended Blogs</option>
            <option value="company-experience">Company Experience</option>
            <option value="learning">Learning</option>
            <option value="others">Others</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
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

    <div className='col-2'>
        <Link to='/blog/addBlog'><button type="button" className="btn btn-outline-secondary" onClick={handleSearch}>Write Blog</button></Link>
    </div>

    </div>
  );
};

export default SearchBlog;
