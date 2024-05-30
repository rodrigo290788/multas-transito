// components/About.js
import React from 'react';
import LoginComp from '../components/LoginComp.jsx';
import transit from '../assets/transit1.jpg';
import logo from '../assets/logo.png';

const Login = () => (
  <div>
    <img src={transit} alt="transit" className="w-100 mb-4" />
    <div fluid className="d-flex flex-column justify-content-center align-items-center"> 
    <img src={logo} alt="Logo Municipal" className="logo mb-4" />
    <LoginComp/>
  </div>
  </div>
);

export default Login;
