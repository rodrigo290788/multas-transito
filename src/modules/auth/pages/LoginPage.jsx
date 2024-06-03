import { LoginForm } from '../components/LoginForm';
import transit from '../../../assets/transit1.jpg';
import logo from '../../../assets/logo.png';

export const LoginPage = () => (
  <div className='bg-white vh-100'>
    <img src={transit} alt='transit' className='w-100 mb-4' />
    <div className='d-flex flex-column justify-content-center align-items-center' style={superposicion}>
      <img src={logo} alt='Logo Municipal' className='logo logoSmall mb-4' />
      <LoginForm />
    </div>
  </div>
);

const superposicion = {
  marginTop : '-70px',
}