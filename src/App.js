import React from 'react';
import { useState } from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main'
import Latest from './components/latest/Latest'
import NewsSec from './components/newsSec/NewsSec';
import Videos from './components/videos/Videos';
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggler = ()=>{
    setMenuOpen(!menuOpen)
  }


  return (
    <div className="App">
     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} toggler={toggler} />
     <Main />
     <Latest />
     <NewsSec />
     <Videos />
    </div>
  );
}

export default App;
