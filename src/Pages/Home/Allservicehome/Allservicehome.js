import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allservicehomecart from './Allservicehomecart/Allservicehomecart';

const Allservicehome = () => {
    const showallservice = useLoaderData();
    return (
        <div >
            <h1 className='text-center font-bold text-2xl shadow-lg text-gray-500 mb-12 rounded-lg'>All service here</h1>
            <div className='lg:grid grid-cols-3 gap-4  justify-items-center'>
                {
                    showallservice.map(shows => <Allservicehomecart key={shows._id} shows={shows} />)
                }
            </div>
        </div>
    );
};

export default Allservicehome;