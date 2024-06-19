import React from 'react';
import Form from 'react-bootstrap/Form';


const OffenderDataForm = ({ handleChange, sortedProvinces }) => (
  <div className='w-100 infrac-column'>
    <h3 className='text-white fw-bold m-0 mb-3'>
      Datos Conductor
    </h3>
    <Form.Group className='mb-3' controlId='conductorNombre'>
      <Form.Control
        className='border border-0 fs-5'
        type='text'
        placeholder='Nombre y Apellido'
        onChange={handleChange}
      />
    </Form.Group>
    <div className='d-flex justify-content-between column-gap-3'>
      <Form.Group className='mb-3' controlId='conductorDNI'>
        <Form.Control
          className='border border-0 fs-5'
          type='text'
          placeholder='D.N.I'
          onChange={handleChange}
        />
    </Form.Group>
    <Form.Group className='mb-3' controlId='conductorDomicilio'>
      <Form.Control
        className='border border-0 fs-5'
        type='text'
        placeholder='Domicilio'
        onChange={handleChange}
      />
    </Form.Group>
  </div>
  <div className='d-flex justify-content-between column-gap-3'>
    <Form.Group className="mb-3" controlId='conductorLocalidad'>
      <Form.Control
        className='border border-0 fs-5'
        type='text'
        placeholder='Localidad'
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId='conductorProvincia'>
      <Form.Select onChange={handleChange} className='fs-5' style={{paddingRight:'65px'}}>
        <option>Prov.</option>
        {sortedProvinces.map((province, index) => (
          <option key={index} value={province}>{province}</option>
        ))}
      </Form.Select>
    </Form.Group>
  </div>
</div>
);

export default OffenderDataForm;

