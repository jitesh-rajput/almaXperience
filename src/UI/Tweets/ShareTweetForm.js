import { Upload } from '@mui/icons-material';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import UploadTweet from '../../Firebase/UploadTweet';
import Alert from '../Components/Alert';

const ShareTweetForm = () => {
  const [formData, setFormData] = useState({
    thought: '',
    photo: null,
  });
  const [isUpload,setIsUpload]=useState();

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const res=await UploadTweet(formData);
    if(res) setIsUpload(true);
    console.log('Form submitted:', formData);
  };

  return (
      <div>
      <h2>Share Your Thought</h2>
      {isUpload ?<Alert error="Tweet Uploaded !!!"/>:'' }
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formThought">
          <Form.Label>Your Thought</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="thought"
            value={formData.thought}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFile">
          <Form.Label>Select a Photo</Form.Label>
          <Form.Control type="file" name="photo" onChange={handleInputChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Share
        </Button>
      </Form>
    </div>
  );
};

export default ShareTweetForm;
