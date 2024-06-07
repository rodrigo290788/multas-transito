import { useState } from 'react';
import { TrafficFinesForm } from '../components/TrafficFinesForm';
import {FinesApproval} from '../components/FinesApproval';
import { LoadingFullScreen } from '../../../components/LoadingFullScreen';
import  { NavbarModule } from '../../../components/NavbarModule';

export const DashboardPage = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <LoadingFullScreen onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div>
      <div className='background-cover'></div>
      {/* <div className='divNav'></div> */}
      <NavbarModule /> 
      <TrafficFinesForm />
      
      <FinesApproval />
    </div>
  );
};
