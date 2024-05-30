import { LoginForm } from '../components/LoginForm';
import transit from '../../../assets/transit1.jpg';
import logo from '../../../assets/logo.png';

export const LoginPage = () => (
  <div>
    <img src={transit} alt='transit' className='w-100 mb-4' />
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <img src={logo} alt='Logo Municipal' className='logo mb-4' />
      <LoginForm />
    </div>
  </div>
);
