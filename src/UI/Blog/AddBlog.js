import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Header from '../Components/Header';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {db} from '../../Firebase/Config';
import { getFirestore, collection, addDoc, doc } from 'firebase/firestore';

function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submittedContent, setSubmittedContent] = useState('');
  const [category, setCategory] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [technology, setTechnology] = useState('');
  const categoryOptions= ['Company Experience', 'Learning', 'Others'];
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    // Reset company name and technology when category changes
    setCompanyName('');
    setTechnology('');
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleTechnologyChange = (e) => {
    setTechnology(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      if (fileType === 'image/jpeg' || fileType === 'image/jpg' || fileType === 'image/png') {
        setSelectedImage(file);
      } else {
        alert('Please select a JPEG, JPG, or PNG image file.');
      }
    }
  };
  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Category:', category);
    console.log('Company Name:', companyName);
    console.log('Technology:', technology);
    console.log('Cover Image',selectedImage);
    
    try {
      
      // Add blog data to the category subcollection
      const blogCollectionRef = collection(db, 'blogs', category.replace(/\s+/g, ''));
      const docRef = await addDoc(blogCollectionRef, {
        title,
        category,
        companyName,
        technology,
        selectedImage,
        content,
      });
  
      console.log('Blog submitted successfully!'+docRef);
      alert('Blog submitted successfully!');
    } catch (error) {
      console.error('Error adding blog: ', error);
      alert('Error submitting blog. Please try again later.');
    }

    //setSubmittedContent(content); // Update submitted content
    setTitle('');
    setContent('');
    setCategory('');
    setCompanyName('');
    setTechnology('');
    setSelectedImage('');
  };


  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: ['small', false, 'large', 'huge']}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      ['clean']
    ],
    
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  return (
    <div>
      <Header />
      <div className="container pt-5">
        <h1 className='mt-5'>Create a New Blog Post</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select category</option>
            {categoryOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Form.Select>
        </Form.Group>

        {category === 'Company Experience' && (
          <Form.Group controlId="formCompanyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter or select company name"
              value={companyName}
              onChange={handleCompanyNameChange}
              list="companyNames"
            />
          </Form.Group>
        )}

        {category === 'Learning' && (
          <Form.Group controlId="formTechnology">
            <Form.Label>Technology</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter technology"
              value={technology}
              onChange={handleTechnologyChange}
            />
          </Form.Group>
        )}

          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={handleTitleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFile">
          <Form.Label>Select Cover photo for Blog </Form.Label>
          <Form.Control 
            type="file" 
            accept=".jpg, .jpeg, .png" 
            name="photo" 
            onChange={handlePhotoChange} 
          />
        </Form.Group>
        {selectedImage && (
          <div>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
          </div>
        )}
          <Form.Group controlId="formContent">
            <Form.Label>Content</Form.Label>
            <ReactQuill
              value={content}
              onChange={handleContentChange}
              modules={modules}
              formats={formats}
            />
          </Form.Group>
            
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

         {/* Display submitted content */}
         {submittedContent && (
          <div className="mt-5">
            <h2>Submitted Content:</h2>
            <div dangerouslySetInnerHTML={{ __html: submittedContent }} />
          </div>
        )}

      </div>
    </div>
  );
}

export default AddBlog;
