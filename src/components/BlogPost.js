import React from 'react';
import './BlogPost.css';

function BlogPost({ title, date, author, image, text }) {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <div className="post-meta">
        <span>{date}</span> | <span>{author}</span>
      </div>
      <img src={image} alt={title} className="post-image" />
      <p>{text}</p>
      <hr />
    </div>
  );
}

export default BlogPost;
