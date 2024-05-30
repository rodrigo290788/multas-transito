// components/Home.js
import React from 'react';
import logo from '../assets/logo.png';
import { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import Login from './Login.jsx'

function Home(){
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
  };
 return (
  <div fluid className="d-flex flex-column justify-content-center align-items-center vh-100">   
    
      {loading ? (<><img src={logo} alt="Logo Municipal" className="logo mb-4" />;<LoadingSpinner onLoadComplete={handleLoadComplete} /></>) : <Login />}
    
  </div>
 )
}

export default Home;
