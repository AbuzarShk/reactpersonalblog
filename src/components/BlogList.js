import React from 'react';
import BlogPost from './BlogPost';
import './BlogList.css';

const posts = [
  {
    title: "First Blog Post",
    date: "January 1, 2024",
    author: "John Doe",
    image: "https://via.placeholder.com/600",
    text: "This is the body of the first blog post."
  },
  {
    title: "Second Blog Post",
    date: "February 15, 2024",
    author: "Jane Smith",
    image: "https://via.placeholder.com/600",
    text: "This is the body of the second blog post."
  }
];

function BlogList() {
  return (
    <div className="blog-list">
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          date={post.date}
          author={post.author}
          image={post.image}
          text={post.text}
        />
      ))}
    </div>
  );
}

export default BlogList;
