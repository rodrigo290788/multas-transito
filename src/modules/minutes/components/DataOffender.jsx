import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export function DataOffender() {

    const data = [
        { type: 'header', content: 'Datos Vehiculo' },
        { type: 'paragraph', label: 'Vehículo', value: 'FIAT SIENA' },
        { type: 'paragraph', label: 'Dominio', value: 'AB321CD' },
        { type: 'paragraph', label: 'Modelo', value: '2015' },
        { type: 'paragraph', label: 'Radicado', value: 'CIUDAD PERICO' },
        { type: 'header', content: 'Datos Propietario' },
        { type: 'paragraph', label: 'Nombre', value: 'Pedro Perez' },
        { type: 'paragraph', label: 'D.N.I', value: '12345678' },
        { type: 'paragraph', label: 'Domicilio', value: 'CALLE Nº123' },
        { type: 'paragraph', label: 'Localidad', value: 'PERICO' },
        { type: 'paragraph', label: 'Provincia', value: 'JUJUY' },
        { type: 'header', content: 'Datos Conductor' },
        { type: 'paragraph', label: 'Nombre', value: 'Pedro Perez' },
        { type: 'paragraph', label: 'D.N.I', value: '12345678' },
        { type: 'paragraph', label: 'Domicilio', value: 'CALLE Nº123' },
        { type: 'paragraph', label: 'Localidad', value: 'PERICO' },
        { type: 'paragraph', label: 'Provincia', value: 'JUJUY' },
        { type: 'header', content: 'Infracción' },
        { type: 'button', label: 'Foto de Infracción', modalTitle: 'FOTO DE INFRACCIÓN', imgUrl: 'https://www.olavarria.gov.ar/wp-content/uploads/2022/05/Seguridad-Operativos-Transito-2.jpg' },
        { type: 'paragraph', label: 'Ubicación de Falta', value: 'EXODO Y GORRITI' },
        { type: 'paragraph', label: 'Infracción', value: 'ESTACIONAMIENTO DOBLE FILA' },
        { type: 'paragraph', label: 'Observaciones', value: 'NO COLABORÓ CON LA DOCUMENTACIÓN' }
      ];
    
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', imgUrl: '' });
  
    const handleShow = (title, imgUrl) => {
      setModalContent({ title, imgUrl });
      setShowModal(true);
    };
  
    const handleClose = () => setShowModal(false);
  
    return (
      <div>
        {data.map((item, index) => {
          if (item.type === 'header') {
            return (
              <h3 key={index} className="text-center">
                <strong>{item.content}</strong>
              </h3>
            );
          } else if (item.type === 'paragraph') {
            return (
              <p key={index} className="mb-2">
                <strong>{item.label}:</strong> <span>{item.value}</span>
              </p>
            );
          } else if (item.type === 'button') {
            return (
              <div key={index} className="mb-2">
                <Button variant="primary" onClick={() => handleShow(item.modalTitle, item.imgUrl)}>
                  {item.label}
                </Button>
  
                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{modalContent.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <img className="w-100" src={modalContent.imgUrl} alt="" />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
}
