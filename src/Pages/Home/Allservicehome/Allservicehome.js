import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../../Hooks/Usetitle';
import Allservicehomecart from './Allservicehomecart/Allservicehomecart';

const Allservicehome = () => {
    UseTitle('services')
    const [showallservice,setshowallservice]=useState([])
    // const showallservice = useLoaderData();
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setshowallservice(data))
    }, [])
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