import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export function DataOffender({ data }) {
  console.log(data.value);

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
