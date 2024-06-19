import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DataOffender } from './DataOffender';

export function Offender({ offender }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(offender)

  return (
    <div className='w-100 d-flex align-items-center mb-3'>
      <div className='rounded-circle me-2' style={{ width: '20px', height: '20px', backgroundColor: '#000' }}></div>
      <div className='w-100 bg-light d-flex justify-content-between align-items-center rounded-4 px-3 py-2'>
        <p className='m-0 fs-6 fw-bold'>Dominio: <span>{offender[3].value}</span></p>
        <Button variant="m-0 p-0 ms-1" onClick={handleShow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48">
            <g fill="none">
              <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 16.3977V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H20" />
              <path stroke="#000" stroke-linecap="round" stroke-width="4" d="M16 14H29" />
              <path stroke="#000" stroke-linecap="round" stroke-width="4" d="M16 21H21" />
              <circle cx="34" cy="34" r="10" fill="#2f88ff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" transform="rotate(90 34 34)" />
              <path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M34 36L34 39" />
              <circle cx="34" cy="30" r="2" fill="#fff" />
            </g>
          </svg>
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Dominio: <span>{offender[3].value}</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DataOffender data={offender} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
