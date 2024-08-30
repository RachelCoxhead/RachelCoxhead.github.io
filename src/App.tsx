import React from 'react';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import About from './pages/About';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content_container">
        <Header />
        <About />
      </div>
    </div>
  );
}

export default App;