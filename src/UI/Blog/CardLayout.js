import React from 'react';
import { Link } from 'react-router-dom';

const CardLayout = (blog) => {
  blog=blog.data.blog
  return (
      <div className="col">
        <div className="card h-100">
          <img src={blog.image} className="card-img-top" alt="Card 3" />
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">
            {blog.content}
            </p>
          </div>
          <div className="card-footer">
            <div className='row'>
            <Link to={`/blog/${blog.id}`}><button className='btn'>Continue Reading</button></Link>
            <small className="text-muted">2 min Read</small>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CardLayout;
