import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import VehicularDataForm from './VehicularDataForm';
import OwnerDataForm from './OwnerDataForm';
import OffenderDataForm from './OffenderDataForm';
import TrafficViolationForm from './TrafficViolationForm';
import { contentCheck } from './trafficFinesStyles';

const provinces = [
  "Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán"
];

const sortedProvinces = ["Jujuy", ...provinces.filter(province => province !== "Jujuy").sort()];

export function TrafficFinesForm({ onNext }) {
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { id, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [id]: checked
      });
    } else if (type === 'file') {
      setFile(files[0]);
    } else {
      setFormData({
        ...formData,
        [id]: value.toUpperCase()
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = formatData(formData);
    await saveToIndexedDB(formattedData);
    console.log('Data saved to IndexedDB:', formattedData);
    onNext(); // Llama a la función onNext aquí
  };

  const formatData = (data) => [
    { type: 'header', content: 'Datos Vehiculo' },
    { type: 'paragraph', label: 'Vehículo', value: data.vehiculo || '' },
    { type: 'paragraph', label: 'Modelo', value: data.modelo || '' },
    { type: 'paragraph', label: 'Dominio', value: data.dominio || '' },
    { type: 'paragraph', label: 'Radicado', value: data.radicado || '' },
    { type: 'header', content: 'Datos Propietario' },
    { type: 'paragraph', label: 'Nombre', value: data.propietarioNombre || '' },
    { type: 'paragraph', label: 'Teléfono', value: data.propietarioTelefono || '' },
    { type: 'paragraph', label: 'D.N.I', value: data.propietarioDNI || '' },
    { type: 'paragraph', label: 'Domicilio', value: data.propietarioDomicilio || '' },
    { type: 'paragraph', label: 'Localidad', value: data.propietarioLocalidad || '' },
    { type: 'paragraph', label: 'Provincia', value: data.propietarioProvincia || '' },
    { type: 'header', content: 'Datos Conductor' },
    { type: 'paragraph', label: 'Nombre', value: data.conductorNombre || '' },
    { type: 'paragraph', label: 'D.N.I', value: data.conductorDNI || '' },
    { type: 'paragraph', label: 'Domicilio', value: data.conductorDomicilio || '' },
    { type: 'paragraph', label: 'Localidad', value: data.conductorLocalidad || '' },
    { type: 'paragraph', label: 'Provincia', value: data.conductorProvincia || '' },
    { type: 'header', content: 'Infracción' },
    { type: 'paragraph', label: 'Lugar de la Infracción', value: formData.lugarInfraccion || '' },
    ...(file ? [{ type: 'button', label: 'Foto de Infracción', modalTitle: 'FOTO DE INFRACCIÓN', imgUrl: URL.createObjectURL(file) }] : []),
    ...(formData.option1 ? [{ type: 'paragraph', label: 'Infracción', value: 'Option 1' }] : []),
    ...(formData.option2 ? [{ type: 'paragraph', label: 'Infracción', value: 'Option 2' }] : []),
    ...(formData.option3 ? [{ type: 'paragraph', label: 'Infracción', value: 'Option 3' }] : []),
    ...(formData.option4 ? [{ type: 'paragraph', label: 'Infracción', value: 'Option 4' }] : []),
    ...(formData.option5 ? [{ type: 'paragraph', label: 'Infracción', value: 'Option 5' }] : []),
    ...(formData.otras ? [{ type: 'paragraph', label: 'Otras Infracciones', value: formData.otrasInfraccion || '' }] : []),
    { type: 'paragraph', label: 'Observaciones', value: data.observaciones || '' }
  ];

  const saveToIndexedDB = async (data) => {
    const dbPromise = indexedDB.open('TrafficFinesDB', 1);

    dbPromise.onupgradeneeded = () => {
      const db = dbPromise.result;
      db.createObjectStore('fines', { keyPath: 'id', autoIncrement: true });
    };

    dbPromise.onsuccess = () => {
      const db = dbPromise.result;
      const tx = db.transaction('fines', 'readwrite');
      const store = tx.objectStore('fines');
      store.add(data);
      tx.oncomplete = () => {
        db.close();
      };
    };

    dbPromise.onerror = (event) => {
      console.error('Database error:', event.target.errorCode);
    };
  };

  return (
    <div className='d-flex justify-content-center align-items-center mt-4'>
      <div className='d-flex flex-column justify-content-between align-items-center border rounded-4' style={{ marginTop: '80px', maxWidth:'730px', ...contentCheck }}>
        <h2 className='text-white fw-bold mb-4'>ACTA DE INFRACCIÓN</h2>
        <Form onSubmit={handleSubmit}>
          <div className='w-100 d-flex justify-content-between align-items-start flex-wrap column-gap-5 mb-4 align-items-stretch'>
            <div className='d-flex flex-column justify-content-between flex-grow-1'>
              <VehicularDataForm handleChange={handleChange} />
              <OwnerDataForm handleChange={handleChange} sortedProvinces={sortedProvinces} />
              <OffenderDataForm handleChange={handleChange} sortedProvinces={sortedProvinces} />
            </div>
            <TrafficViolationForm handleChange={handleChange} />
          </div>

          <div className='w-100 d-flex justify-content-center align-items-center'>
          <Button variant='danger w-100 colum' type='submit'>
            CARGAR FALTA
          </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
