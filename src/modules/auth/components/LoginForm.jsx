import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const LoginForm = () => {
  return (
    <Form>
      <Form.Group className='mb-4' controlId='formBasicEmail'>
        <Form.Control type='text' placeholder='Nombre de Usuario' />
      </Form.Group>

      <Form.Group className='mb-4' controlId='formBasicPassword'>
        <Form.Control type='password' placeholder='Contraseña' />
      </Form.Group>
      <Button variant='primary w-100' type='submit'>
        INGRESAR
      </Button>
    </Form>
  );
};
