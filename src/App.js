
import './App.css';
import React, { useState } from 'react';
import Login from './component/Login';
import Signup from './component/Signup';

function App() {

  const [currform, Setcurrform]= useState('login');

  // function toggleForm(fr){
  //   Setcurrform(fr)
  // }

  let toggleForm = (fr)=>{
    Setcurrform(fr)
  }

  return (
    <div className="App">
     {currform === 'login' ? <Login onForm={toggleForm} /> : <Signup onForm={toggleForm} />}
    </div>
  );
}

export default App;
