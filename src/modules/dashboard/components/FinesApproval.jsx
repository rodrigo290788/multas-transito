import React from 'react';
import Button from 'react-bootstrap/Button';

export function FinesApproval({ onBack }) {
  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center '>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className='w-75 bg-light bg-opacity-50 rounded-5 mb-5 d-flex align-items-center'>
          <p className='w-75 mb-5 mt-5 fs-1 fw-bold ps-4'>Se cargaron correctamente los datos </p>
          <svg className='fontSizeSmall' style={{margin:'0 10px', marginTop:'-120px',}} xmlns="http://www.w3.org/2000/svg" width="180px" height="180px" viewBox="0 0 48 48"><g fill="none" stroke="#1976d2" stroke-linejoin="round" stroke-width="4"><path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"/><path stroke-linecap="round" d="m16 24l6 6l12-12"/></g></svg>
        </div>
        <Button variant='light w-100 colum mb-4' type='submit'>
          IMPRIMIR
          <svg style={{ fontSize: '40px', marginLeft: '20px'}} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#424242" d="M9 11h30v3H9z" /><path fill="#616161" d="M4 25h40v-7c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4z" /><path fill="#424242" d="M8 36h32c2.2 0 4-1.8 4-4v-8H4v8c0 2.2 1.8 4 4 4" /><circle cx="40" cy="18" r="1" fill="#00e676" /><path fill="#90caf9" d="M11 4h26v10H11z" /><path fill="#242424" d="M37.5 31h-27c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h27c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5" /><path fill="#90caf9" d="M11 31h26v11H11z" /><path fill="#42a5f5" d="M11 29h26v2H11z" /><path fill="#1976d2" d="M16 33h17v2H16zm0 4h13v2H16z" /></svg>
        </Button>
        <Button variant='primary w-100 colum' type='button' onClick={onBack}>
          NUEVA ACTA
        </Button>
      </div>
    </div>
  );
}
