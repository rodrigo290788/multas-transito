import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function CheckComp() {

  const checkboxStyle = {
    transform: 'scale(1.5)', // Aumenta el tamaño del checkbox
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: '0',
    marginLeft: '-10px',
  };
  const checkboxStyle2 = {
    transform: 'scale(1.066)', // Aumenta el tamaño del checkbox
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: '0',
    border: 'none',
    marginLeft: '25px',
    marginRight: '3px',
  };

  const labelStyle = {
    display: 'block',
    width: '200px',
    backgroundColor: '#fff', // Fondo blanco para el label
    padding: '5px',
    paddingLeft: '10px',// Agrega algo de padding para mejor apariencia
    borderRadius: '5px', // Agrega bordes redondeados
    fontSize: '15px',
  };

  const labelStyle1 = {
    transform: 'scale(1.5)', // Aumenta el tamaño del checkbox
    display: 'block',
    width: '200px',
    backgroundColor: '#fff', // Fondo blanco para el label
    padding: '5px',
    paddingLeft: '10px',
    borderRadius: '5px', // Agrega bordes redondeados
    fontSize: '15px',
  };

  const contentCheck = {
    height: '850px',
    paddingTop: '30px',
  }
  return (
    <div className='d-flex flex-column justify-content-between align-items-center' style={contentCheck}>
      <h2 className='text-white fw-bold'>ACTA DE INFRACCIÓN</h2>
      <Form.Group className="mb-3" controlId="formBasicPassword" style={labelStyle1}>
        <Form.Label>Patente</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" style={labelStyle1}>
        <Form.Label>Ubicación</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group controlId="option1">
        <Form.Check
          type="checkbox"
          label={<span style={labelStyle}>Option 1</span>}
          style={checkboxStyle}
        />
      </Form.Group>


      <Form.Group controlId="option2">
        <Form.Check
          type="checkbox"
          label={<span style={labelStyle}>Option 2</span>}
          style={checkboxStyle}
        />
      </Form.Group>



      <Form.Group controlId="option3">
        <Form.Check
          type="checkbox"
          label={<span style={labelStyle}>Option 3</span>}
          style={checkboxStyle}
        />
      </Form.Group>


      <Form.Group controlId="option4">
        <Form.Check
          type="checkbox"
          label={<span style={labelStyle}>Option 4</span>}
          style={checkboxStyle}
        />
      </Form.Group>


      <Form.Group controlId="option5">
        <Form.Check
          type="checkbox"
          label={<span style={labelStyle}>Option 5</span>}
          style={checkboxStyle}
        />
      </Form.Group>

      <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicCheckbox" style={labelStyle1}>
        <Form.Select className="border border-0 p-0" >
          <option>Otras</option>
          <option>Option 6</option>
          <option>Option 7</option>
          <option>Option 8</option>
        </Form.Select>
        <Form.Check
          type="checkbox"
          style={checkboxStyle2}
        />
      </Form.Group>
      <Button variant="danger w-75" type="submit">
        CARGAR FALTA
      </Button>
    </div>
  );
};

export default CheckComp;