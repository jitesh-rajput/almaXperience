import React, { useState ,useEffect} from 'react';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import { data } from './data';
const FullBlog = () => {
  const coments=null;
  const [commentText, setCommentText] = useState('');
  const handleAddComment=()=>{
    console.log(commentText);
  }
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    console.log(data);
    const blog=data.find(blog => blog.blog.id === parseInt(id))
    console.log(blog);
    if(blog){
      setBlog(blog.blog);
    }
  }, [id]);

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <>
    <Header/>
    <div className="container mt-5 pt-5">
      <h1 className="mb-4">{blog.id}</h1>
      <div className="row">
        <div className="col-md-8">
          <img src={blog.image} className="img-fluid mb-4" alt="Blog Post" />
          <h2>{blog.title}</h2>
          <p>
            {blog.content}
          </p>
          <p>
            <strong>Links:</strong>
            <a href="#">Link 1</a>, <a href="#">Link 2</a>, <a href="#">Link 3</a>
          </p>
        </div>
        <div className="col-md-4">
          <h3>Add a Comment</h3>
          <div className="mb-3">
            <textarea
              className="form-control mb-2"
              placeholder="Your Comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleAddComment}>Add Comment</button>
          </div>
          <h3>Comments</h3>

          <div class="row">
            <div class="col-md-12">
              {blog.comments.map(coment=>(
                <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{coment.username}</h5>
                  <p class="card-text">{coment.comment}</p>
                  <p class="card-text"><small class="text-muted">{coment.created_date}</small></p>
                </div>
              </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default FullBlog;
