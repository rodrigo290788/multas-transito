// src/components/LoadingSpinner.jsx
import React, { useEffect, useState } from 'react';
import { ProgressBar, Container, Row, Col } from 'react-bootstrap';

const LoadingSpinner = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          onLoadComplete();
          return oldProgress;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, 40); // Incrementa el progreso cada 40ms (4 segundos en total)

    return () => {
      clearInterval(interval);
    };
  }, [onLoadComplete]);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:'30px',
    
  };

  const colStyle = {
    
    width: '50vw', // Ajusta este valor según sea necesario
    maxWidth: '240px', // Puedes establecer un máximo para evitar que sea demasiado ancho
   
  };

  const progressBarStyle = {
    backgroundColor: '#fff', // Color de la barra de progreso
  };

  return (
    <Container fluid style={containerStyle}>
      <Row className="w-100">
        <Col xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={colStyle}>
            <ProgressBar 
              animated 
              now={progress} 
              label={`${progress}%`} 
              variant="dark" 
              style={progressBarStyle} // Estilo de la barra de progreso
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default LoadingSpinner;
