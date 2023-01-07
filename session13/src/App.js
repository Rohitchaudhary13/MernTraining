import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react';


function App() {
  

  return (
    <>
    <div className="form" onSubmit={handleSubmit}>
        <form className='my-form'>
          {submit ? <div>Success!, Form Submitted!</div> : null}
          <input placeholder='First Name' value={values.FirstName} onChange={handleFirstname} />
          <input placeholder='Last Name' value={values.LastName} onChange={handleLastname} />
          <input placeholder='Email' value={values.Email} onChange={handleEmail} />
          <button className='btn' onClick={handleSubmit}>Submit</button>
        </form>
    </div>
    </>
  );
  }

export default App;
