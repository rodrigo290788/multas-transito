import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import {
    checkboxStyle2,
    labelStyle1,
  } from './trafficFinesStyles';
  
  const TrafficViolationForm = ({ handleChange }) => {
    const [file, setFile] = useState(null);
    const [checkboxes, setCheckboxes] = useState({
      option1: false,
      option2: false,
      option3: false,
      option4: false,
      option5: false,
      otras: false
    });
    const [otrasText, setOtrasText] = useState('');
  
    const handleCheckboxChange = (e) => {
      const { id, checked } = e.target;
      setCheckboxes({
        ...checkboxes,
        [id]: checked
      });
      handleChange(e);
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFile(file);
      handleChange(e);
    };
  
    const handleOtrasTextChange = (e) => {
      const { value } = e.target;
      setOtrasText(value.toUpperCase());
      handleChange(e);
    };
  
    return (
      <div className='w-100 infrac-column'>
        <h3 className='text-white fw-bold m-0 mb-3'>
          Infracción
        </h3>
        <Form.Group className='mb-3' controlId='lugarInfraccion'>
          <Form.Control
            className='border border-0 fs-5' 
            type='text'
            placeholder='Lugar de la Infracción'
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className='text-white fw-bold'>Tomar una Foto</Form.Label>
          <Form.Control 
          className='fs-5' 
            type="file" 
            accept="image/*" 
            capture="environment" 
            onChange={handleFileChange}
          />
        </Form.Group>
        {['option1', 'option2', 'option3', 'option4', 'option5'].map(option => (
          <Form.Group
            className='colum mb-3 fs-5' 
            style={labelStyle1}
            controlId={option}
            key={option}
            onChange={handleCheckboxChange}>
            <Form.Check
              className='w-100 p-0 d-flex flex-row-reverse justify-content-between align-items-center'
              type='checkbox'
              label={<span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>}
              checked={checkboxes[option]}
            />
          </Form.Group>
        ))}
        <Form.Group className='mb-3 pe-1 d-flex align-items-center' controlId='otras' style={labelStyle1}>
          <Form.Group controlId='otrasInfraccion'>
            <Form.Control
              className='w-100 border border-0 fs-5 ps-0'
              type='text'
              placeholder='Otras'
              onChange={handleOtrasTextChange}
              value={otrasText}
            />
          </Form.Group>
          <Form.Check
            className='w-100'
            type='checkbox'
            style={checkboxStyle2}
            checked={checkboxes.otras}
            onChange={handleCheckboxChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="observaciones">
          <Form.Control className='fs-5' as="textarea" rows={3} placeholder='Observaciones' onChange={handleChange} />
        </Form.Group>
      </div>
    );
  };
  
  export default TrafficViolationForm;