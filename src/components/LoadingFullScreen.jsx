import PropTypes from 'prop-types';

import { LoadingBar } from './LoadingBar';
import logo from '../assets/logo.png';

export function LoadingFullScreen({ onLoadComplete }) {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <img src={logo} alt='Logo Municipal' className='logo mb-4' />
      <LoadingBar onLoadComplete={onLoadComplete} />
    </div>
  );
}

LoadingFullScreen.propTypes = {
  onLoadComplete: PropTypes.func,
};
