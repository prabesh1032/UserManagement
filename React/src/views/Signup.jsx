import React from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  }
  return (
     <div className="login-signup-form animated fadeInDown ">
      <div className="form">  
    <form onSubmit={onSubmit}>
      <h1 className="title">Signup for Free</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="btn btn-block">Signup</button>
      <p className='message'>
        Already Registered?? <Link to="/login">Login to your account</Link>
      </p>
    </form>
    </div>
    </div>
  )
}
