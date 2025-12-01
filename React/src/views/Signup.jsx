
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../axois_client';

export default function Login() {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmPasswordRef.current.value,
    };


    axiosClient.post('/signup', payload).then (({ data }) => {
      setToken(data.token);
      setUser(data.user);
    })
    .catch((err) => {
      const response = err.response;
      if (response && response.status === 422) {
        console.log(response.data.errors);
      }
    });
  };
  return (

    <form onSubmit={onSubmit}>
      <h1 className="title">Signup for Free</h1>
      <input ref={nameRef} type="text" placeholder="Fullname" />
      <input ref={emailRef} type="email" placeholder="Email Address" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <input ref={confirmPasswordRef} type="password" placeholder="Confirm Password" />
      <button className="btn btn-block">Signup</button>
      <p className='message'>
        Already Registered?? <Link to="/login">Login to your account</Link>
      </p>
    </form>

  )
}

