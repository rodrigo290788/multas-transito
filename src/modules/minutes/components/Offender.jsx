import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {DataOffender} from './DataOffender';


export function Offender() {

    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='w-100 d-flex align-items-center mb-3'>
            <div className='rounded-circle me-2' style={{ width: '20px', height: '20px', backgroundColor: '#000' }}></div>
            <div className='w-100 bg-light d-flex justify-content-between align-items-center rounded-4 px-3 py-2'>
                <p className='m-0 fs-6 fw-bold'>Dominio: <span>AB321DC</span></p>
                <Button variant="m-0 p-0 ms-1" onClick={handleShow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><g fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 16.3977V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H20" /><path stroke="#000" stroke-linecap="round" stroke-width="4" d="M16 14H29" /><path stroke="#000" stroke-linecap="round" stroke-width="4" d="M16 21H21" /><circle cx="34" cy="34" r="10" fill="#2f88ff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" transform="rotate(90 34 34)" /><path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M34 36L34 39" /><circle cx="34" cy="30" r="2" fill="#fff" /></g></svg>
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Dominio: <span>AB321DC</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DataOffender/>
                        {/* <h3 className='text-center'><strong>Datos Vehiculo</strong></h3>
                        <p className='mb-2'><strong>Vehiculo:</strong> <span>FIAT SIENA</span></p>
                        <p className='mb-2'><strong>Dominio:</strong> <span>AB321CD</span></p>
                        <p className='mb-2'><strong>Modelo:</strong> <span>2015</span></p>
                        <p className='mb-2'><strong>Radicado:</strong> <span>CIUDAD PERICO</span></p>

                        <h3 className='text-center'><strong>Datos Propietario</strong></h3>
                        <p className='mb-2'><strong>Nombre:</strong> <span>Pedro Perez</span></p>
                        <p className='mb-2'><strong>D.N.I:</strong> <span>Pedro Perez</span></p>
                        <p className='mb-2'><strong>Domicilio:</strong> <span>CALLE Nº123</span></p>
                        <p className='mb-2'><strong>Localidad:</strong> <span>PERICO</span></p>
                        <p className='mb-2'><strong>Provincia:</strong> <span>JUJUY</span></p>

                        <h3 className='text-center'><strong>Datos </strong></h3>
                        <p className='mb-2'><strong>Nombre:</strong> <span>Pedro Perez</span></p>
                        <p className='mb-2'><strong>D.N.I:</strong> <span>Pedro Perez</span></p>
                        <p className='mb-2'><strong>Domicilio:</strong> <span>CALLE Nº123</span></p>
                        <p className='mb-2'><strong>Localidad:</strong> <span>PERICO</span></p>
                        <p className='mb-2'><strong>Provincia:</strong> <span>JUJUY</span></p>

                        <h3 className='text-center'><strong>Infracción </strong></h3>
                        <div className='mb-2'>
                            <Button variant="primary" onClick={handleShow1}>
                                Foto de Infracción
                            </Button>

                            <Modal className='bg-secondary-subtle' show={show1} onHide={handleClose1}>
                                <Modal.Header >
                                    <Modal.Title>FOTO DE INFRACCIÓN</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <img className='w-100' src="https://www.olavarria.gov.ar/wp-content/uploads/2022/05/Seguridad-Operativos-Transito-2.jpg" alt="" />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="danger" onClick={handleClose1}>
                                        Cerrar
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                        <p className='mb-2'><strong>Ubicación de Falta:</strong> <span>EXODO Y GORRITI</span></p>
                        <p className='mb-2'><strong>Infracción:</strong> <span>ESTACIONAMIENTO DOBLE FILA</span></p>
                        <p className='mb-2'><strong>Observaciones:</strong> <span>NO COLABORÓ CON LA DOCUMENTACIÓN</span></p> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

