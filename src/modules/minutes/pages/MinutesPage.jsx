import React, { useEffect, useState } from 'react';
import { NavbarModule } from '../../../components/NavbarModule';
import { Offender } from '../components/Offender';
import { getIndexedDBData } from '../utils/IndexedDBUtils'; // Import the utility function

export function MinutesPage() {
  const [offenders, setOffenders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getIndexedDBData();
        setOffenders(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <div className='background-cover'></div>
        <NavbarModule />
        <div className='w-100 d-flex flex-column justify-content-center align-items-center' style={{ marginTop: '80px' }}>
          <div className='w-75 d-flex flex-column justify-content-center align-items-center mt-4'>
            <h2 className='text-white fw-bold mb-3'>Actas</h2>
            {offenders.map((offender, index) => (
              <Offender key={index} offender={offender} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

