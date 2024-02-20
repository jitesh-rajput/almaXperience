import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Header from '../Components/Header';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Content:', content);
    setTitle('');
    setContent('');
  };

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
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
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={handleTitleChange}
            />
          </Form.Group>

          <Form.Group controlId="formContent">
            <Form.Label>Content</Form.Label>
            <ReactQuill
              value={content}
              onChange={handleContentChange}
              modules={modules}
              formats={formats}
            />
          </Form.Group>

          <Form.Group controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="Enter image URL" />
          </Form.Group>

          <Form.Group controlId="formLink">
            <Form.Label>Resource Link</Form.Label>
            <Form.Control type="text" placeholder="Enter link URL" />
          </Form.Group>

          <Form.Group controlId="formHashtags">
            <Form.Label>Hashtags</Form.Label>
            <Form.Control type="text" placeholder="Enter hashtags (comma-separated)" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddBlog;
