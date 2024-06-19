import { useState } from 'react';
import { TrafficFinesForm } from '../components/TrafficFinesForm';
import { FinesApproval } from '../components/FinesApproval';
import { LoadingFullScreen } from '../../../components/LoadingFullScreen';
import { NavbarModule } from '../../../components/NavbarModule';

export function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [currentComponent, setCurrentComponent] = useState('TrafficFinesForm');

  const handleLoadComplete = () => {
    setLoading(false);
  };

  const showFinesApproval = () => {
    setCurrentComponent('FinesApproval');
  };

  const showTrafficFinesForm = () => {
    setCurrentComponent('TrafficFinesForm');
  };

  if (loading) {
    return <LoadingFullScreen onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div>
      <div className='background-cover'></div>
      <NavbarModule />
      {currentComponent === 'TrafficFinesForm' && <TrafficFinesForm onNext={showFinesApproval} />}
      {currentComponent === 'FinesApproval' && <FinesApproval onBack={showTrafficFinesForm} />}
    </div>
  );
}
