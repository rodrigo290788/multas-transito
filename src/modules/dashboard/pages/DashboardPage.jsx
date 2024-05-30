import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../../assets/logo.png';
import { LoadingBar } from '../../../components/LoadingBar';

export const DashboardPage = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleLoadComplete = () => {
    setLoading(false);
    navigate('/login');
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      {loading && (
        <>
          <img src={logo} alt='Logo Municipal' className='logo mb-4' />;
          <LoadingBar onLoadComplete={handleLoadComplete} />
        </>
      )}
    </div>
  );
};
