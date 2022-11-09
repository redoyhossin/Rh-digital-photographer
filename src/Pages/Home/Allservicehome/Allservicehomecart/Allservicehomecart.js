import { Card } from 'flowbite-react';
import React from 'react';

const Allservicehomecart = ({ shows }) => {
    const { description, details, name, picture, price, rating, _id } = shows;

    return (
        <div className='flex justify-center mb-6'>
            <div className="max-w-sm">
                <Card
                    horizontal={true}
                    imgSrc={picture}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {description.slice(0, 100)}...
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default Allservicehomecart;