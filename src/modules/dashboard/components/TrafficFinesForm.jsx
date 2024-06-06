import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
  checkboxStyle,
  checkboxStyle2,
  content,
  contentCheck,
  labelStyle,
  labelStyle1,
} from './trafficFinesStyles';

export function TrafficFinesForm() {
  return (
    <div className='d-flex  justify-content-center align-items-center mt-4'>
      <div
        className='d-flex flex-column justify-content-between align-items-center border rounded-4'
        style={contentCheck}>
        <h2 className='text-white fw-bold mb-4'>ACTA DE INFRACCIÓN</h2>
        <div className='w-100 d-flex justify-content-between align-items-center flex-wrap mb-4'>
          <div className='w-100 infrac-column'>
            <h3 className='text-white fw-bold m-0 mb-3' style={content}>
              Datos Personales
            </h3>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Control
                className='border border-0'
                type='text'
                placeholder='Patente'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Control
                className='border border-0'
                type='text'
                placeholder='Ubicación de Falta'
              />
            </Form.Group>
          </div>

          <div className='w-100 infrac-column'>
            <h3 className='text-white fw-bold m-0 mb-3' style={content}>
              Infracción
            </h3>
            <Form.Group
              className='colum mb-3'
              style={labelStyle}
              controlId='option1'>
              <Form.Check
                className='w-100 p-0 d-flex flex-row-reverse justify-content-between align-items-center'
                type='checkbox'
                label={<span>Option 1</span>}
                style={checkboxStyle}
              />
            </Form.Group>

            <Form.Group
              className='colum mb-3'
              style={labelStyle}
              controlId='option2'>
              <Form.Check
                className=' w-100 p-0 d-flex flex-row-reverse justify-content-between align-items-center'
                type='checkbox'
                label={<span>Option 2</span>}
              />
            </Form.Group>

            <Form.Group
              className='colum mb-3'
              style={labelStyle}
              controlId='option3'>
              <Form.Check
                className=' w-100 p-0 d-flex flex-row-reverse justify-content-between align-items-center'
                type='checkbox'
                label={<span>Option 3</span>}
                style={checkboxStyle}
              />
            </Form.Group>

            <Form.Group
              className='colum mb-3'
              style={labelStyle}
              controlId='option4'>
              <Form.Check
                className=' w-100 p-0 d-flex flex-row-reverse justify-content-between align-items-center'
                type='checkbox'
                label={<span>Option 4</span>}
                style={checkboxStyle}
              />
            </Form.Group>

            <Form.Group
              className='colum mb-3'
              style={labelStyle}
              controlId='option5'>
              <Form.Check
                className=' w-100 p-0 d-flex flex-row-reverse justify-content-between align-items-center'
                type='checkbox'
                label={<span>Option 5</span>}
                style={checkboxStyle}
              />
            </Form.Group>

            <Form.Group
              className='mb-3 pe-1 d-flex align-items-center'
              controlId='formBasicCheckbox'
              style={labelStyle1}>
              <Form.Group className='' controlId='formBasicPassword'>
                <Form.Control
                  className='w-100 border border-0'
                  type='text'
                  placeholder='Otras'
                />
              </Form.Group>
              <Form.Check
                className='w-100'
                type='checkbox'
                style={checkboxStyle2}
              />
            </Form.Group>
          </div>
        </div>

        <Button variant='danger w-75 colum' type='submit'>
          CARGAR FALTA
        </Button>
      </div>
    </div>
  );
}
