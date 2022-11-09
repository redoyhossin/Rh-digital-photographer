import { Card } from 'flowbite-react';
import React from 'react';

const Homeservicecart = ({ homes }) => {
    const { description, details, name, picture, price, rating, _id } = homes;
    return (
        <div className='flex justify-center mb-6'>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 ">
                <img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-64 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-4 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name} </h2>
                        <p className="dark:text-gray-100">{ description.slice(0,100) }...</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Homeservicecart;