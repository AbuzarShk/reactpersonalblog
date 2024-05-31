import React from 'react';
import BlogPost from './BlogPost';
import './BlogList.css';

const posts = [
  {
    title: "First Blog Post",
    date: "December 20, 2021",
    author: "Peter Alex",
    image: "react.png",
    text: "Welcome to my first blog post! In this post, I'll share my thoughts on learning React. React is a popular JavaScript library for building user interfaces. It's maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page applications (SPAs), mobile apps, or server-rendered apps with frameworks like Next.js."
  },
  {
    title: "Exploring the JavaScript Ecosystem",
    date: "February 15, 2024",
    author: "John Dcosta",
    image: "js.png",
    text: "JavaScript is a versatile language that can be used for both front-end and back-end development. With the advent of Node.js, JavaScript has become a popular choice for server-side programming as well. In this post, we'll explore some of the most popular libraries and frameworks in the JavaScript ecosystem, including React, Angular, Vue.js, and more."
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
