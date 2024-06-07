import React from 'react'
import {NavbarModule} from '../../../components/NavbarModule';
import {Offender} from '../components/Offender'
export function MinutesPage() {
    return (
        <div>
            <div>
                <div className='background-cover'></div>
                <NavbarModule />
               <div className='w-100 d-flex flex-column justify-content-center align-items-center' style={{marginTop:'80px'}}>
               <div className='w-75 d-flex flex-column justify-content-center align-items-center mt-4'>
               <h2 className='text-white fw-bold mb-3'>Actas</h2>
                <Offender />
                <Offender />
                <Offender />
                </div>
               </div>
            </div>
        </div>
    )
}
