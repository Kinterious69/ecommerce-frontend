import React, { useState, useContext } from 'react';
import './CSS/LoginSignup.css';
import { ShopContext } from '../Context/ShopContext'; 

const LoginSignup = () => {
  const { setAuthToken } = useContext(ShopContext); 

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    let responseData;

    await fetch('http://localhost:4000/api/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      setAuthToken(responseData.token); 
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signUp = async () => {
    let responseData;

    await fetch('http://localhost:4000/api/users/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      setAuthToken(responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>{state}</h1>

        <div className="loginSignup-fields">
          {state === "Sign Up" && (
            <input
              name='username'
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder='Your Name'
            />
          )}

          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder='Email Address'
          />

          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder='Your Password'
          />
        </div>

        <button onClick={() => (state === "Login" ? login() : signUp())}>
          Continue
        </button>

        {state === "Sign Up" ? (
          <p className='loginSignup-login'>
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className='loginSignup-login'>
            Create an account?{" "}
            <span onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        )}

        <div className="loginSignup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
