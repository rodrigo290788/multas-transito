import React from 'react';
import Form from 'react-bootstrap/Form';


const OwnerDataForm = ({ handleChange, sortedProvinces }) => (
  <div className='w-100 infrac-column'>
    <h3 className='text-white fw-bold m-0 mb-3'>
      Datos Propietario
    </h3>
    <div className='d-flex justify-content-between column-gap-3'>
      <Form.Group className='mb-3' controlId='propietarioNombre'>
        <Form.Control
          className='border border-0 fs-5'
          type='text'
          placeholder='Nombre y Apellido'
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='propietarioTelefono'>
        <Form.Control
          className='border border-0 fs-5'
          type='text'
          placeholder='Teléfono'
          onChange={handleChange}
        />
      </Form.Group>
    </div>
    <div className='d-flex justify-content-between column-gap-3'>
      <Form.Group className='mb-3' controlId='propietarioDNI'>
        <Form.Control
          className='border border-0 fs-5'
          type='text'
          placeholder='D.N.I'
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='propietarioDomicilio'>
        <Form.Control
          className='border border-0 fs-5'
          type='text'
          placeholder='Domicilio'
          onChange={handleChange}
        />
      </Form.Group>
    </div>
    <div className='d-flex justify-content-between column-gap-3'>
      <Form.Group className='mb-3' controlId='propietarioLocalidad'>
        <Form.Control
          className='border border-0 fs-5'
          type='text'
          placeholder='Localidad'
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId='propietarioProvincia'>
        <Form.Select onChange={handleChange} className='fs-5' style={{paddingRight:'65px'}}>
          <option >Provincia</option>
          {sortedProvinces.map((province, index) => (
            <option key={index} value={province}>{province}</option>
          ))}
        </Form.Select>
      </Form.Group>
    </div>
  </div>
);

export default OwnerDataForm;
