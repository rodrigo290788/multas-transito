import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function CheckComp() {

  const checkboxStyle = {
    // transform: 'scale(1.5)', 
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: '0',
    // marginLeft: '10px',
    width: '100% !important'
    
  };
  const checkboxStyle2 = {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: '0',
    border: 'none',
    marginRight: '3px',
  };

  const labelStyle = {
    display: 'block',
    // minWidth: '280px',
    width: '100% ',
    backgroundColor: '#fff', // Fondo blanco para el label
    padding: '5px',
    paddingLeft: '10px',// Agrega algo de padding para mejor apariencia
    borderRadius: '5px', // Agrega bordes redondeados
    fontSize: '20px',
  
  };

  const labelStyle1 = {
    // transform: 'scale(1.5)', 
    display: 'block',
    minWidth: '180px',
    backgroundColor: '#fff', // Fondo blanco para el label
    padding: '5px',
    paddingLeft: '10px',
    borderRadius: '5px', // Agrega bordes redondeados
    fontSize: '20px',
  };
  const scale15 = {
    // transform: 'scale(1.5)',
    width: '100%',
    maxWidth: '380px',
    padding: '0',
    paddingLeft: '0',
    
    fontSize: '20px',
  }
  const contentCheck = {
    padding: '20px',
    paddingTop: '30px',
    width: '90%',
    marginBottom: '70px',
  }
  const content = {
    width: '100%',
  }
  return (
    <div className='d-flex  justify-content-center align-items-center mt-4'>
    <div className='d-flex flex-column justify-content-between align-items-center border rounded-4' style={contentCheck}>
      <h2 className='text-white fw-bold mb-4'>ACTA DE INFRACCIÓN</h2>
      <div className='w-100 d-flex justify-content-between align-items-center flex-wrap mb-4'>
      <div className='w-100 infrac-column'>
      <h3 className='text-white fw-bold m-0 mb-3' style={content}>Datos Personales</h3>
      <Form.Group className="mb-3" controlId="formBasicPassword">  
        <Form.Control className='border border-0' type="text" placeholder="Patente" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control className='border border-0' type="text"placeholder="Ubicación de Falta" />
      </Form.Group>
      </div>

      <div className='w-100 infrac-column'>
      <h3 className='text-white fw-bold m-0 mb-3' style={content}>Infracción</h3>
      <Form.Group className='colum mb-3' style={labelStyle} controlId="option1">
        <Form.Check className='w-100 p-0 d-flex flex-row-reverse justify-content-between align-items-center'
          type="checkbox"
          label={<span >Option 1</span>}
          style={checkboxStyle}
          
        />
      </Form.Group>


      <Form.Group className='colum mb-3' style={labelStyle} controlId="option2">
        <Form.Check className=' w-100 p-0 d-flex flex-row-reverse justify-content-between align-items-center'
          type="checkbox"
          label={<span>Option 2</span>}
          
        />
      </Form.Group>



      <Form.Group className='colum mb-3' style={labelStyle} controlId="option3">
        <Form.Check className=' w-100 p-0 d-flex flex-row-reverse justify-content-between align-items-center'
          type="checkbox"
          label={<span>Option 3</span>}
          style={checkboxStyle}
        />
      </Form.Group>


      <Form.Group className='colum mb-3' style={labelStyle} controlId="option4">
        <Form.Check className=' w-100 p-0 d-flex flex-row-reverse justify-content-between align-items-center'
          type="checkbox"
          label={<span>Option 4</span>}
          style={checkboxStyle}
        />
      </Form.Group>


      <Form.Group className='colum mb-3' style={labelStyle} controlId="option5">
        <Form.Check className=' w-100 p-0 d-flex flex-row-reverse justify-content-between align-items-center'
          type="checkbox"
          label={<span>Option 5</span>}
          style={checkboxStyle}
        />
      </Form.Group>

      <Form.Group className="mb-3 pe-1 d-flex align-items-center" controlId="formBasicCheckbox" style={labelStyle1}>
      <Form.Group className="" controlId="formBasicPassword">  
        <Form.Control className='w-100 border border-0' type="text" placeholder="Otras" />
      </Form.Group>
        <Form.Check className='w-100'
          type="checkbox"
          style={checkboxStyle2}
        />
      </Form.Group>
      </div>
      </div>
      
      <Button variant="danger w-75 colum" type="submit">
        CARGAR FALTA
      </Button>
    </div>
    </div>
  );
};

export default CheckComp;