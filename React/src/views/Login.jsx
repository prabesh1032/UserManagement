import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }
  return (
    <div className="login-signup-form animated fadeInDown ">
      <div className="form">  
        <form onSubmit={onSubmit}>
          <h1 className="title">Login To Your Account</h1>
        <input type="text" placeholder="Fullname" />  
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="btn btn-block">Login</button>
        <p className='message'>
          Not Registered?? <Link to="/signup">Create an account</Link>
        </p>
        </form>
      </div>
    </div>
  )
}
