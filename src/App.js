import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import BlogList from './components/BlogList';

function App() {
  return (
    <div className="app">
      <TopBar />
      <BlogList />
    </div>
  );
}

export default App;
