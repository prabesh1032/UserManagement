import React from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  }
  return (
     
    <form onSubmit={onSubmit}>
      <h1 className="title">Login To Your Account</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="btn btn-block">Login</button>
      <p className='message'>
        Not Registered?? <Link to="/signup">Create an account</Link>
      </p>
    </form>
  )
}
