import React from 'react';
import Form from 'react-bootstrap/Form';

const VehicularDataForm = ({ handleChange }) => (
  <div className='w-100 infrac-column'>
    <h3 className='text-white fw-bold m-0 mb-3'>
      Datos Vehicular
    </h3>
    <Form.Group className='mb-3' controlId='vehiculo'>
      <Form.Control
        className='border border-0 fs-5'
        type='text'
        placeholder='Vehiculo'
        onChange={handleChange}
      />
    </Form.Group>
    <div className='d-flex justify-content-between column-gap-3'>
      <Form.Group className='mb-3' controlId='modelo'>
        <Form.Control
          className='border border-0 fs-5'
          type='text'
          placeholder='Modelo'
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='dominio'>
        <Form.Control
          className='border border-0 fs-5'
          type='text'
          placeholder='Dominio'
          onChange={handleChange}
        />
      </Form.Group>
    </div>
    <Form.Group className='mb-3' controlId='radicado'>
      <Form.Control
        className='border border-0 fs-5'
        type='text'
        placeholder='Radicado'
        onChange={handleChange}
      />
    </Form.Group>
  </div>
);

export default VehicularDataForm;
