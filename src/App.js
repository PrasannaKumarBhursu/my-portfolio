import React from 'react';



import './App.css';


import Profile from "./components/Profile"
import Completions from "./components/Completions"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"




export default function App() {
  
 

  return (
    <>
    <Navbar/>
    <div className="app-container">
      <Profile/>
      <Completions/>
      <Skills/>
      <Contact/>
    </div>
    </>
   
  
   
  );
}
