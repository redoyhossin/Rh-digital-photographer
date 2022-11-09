import { Button } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Homeservicecart from './Homeservicecart/Homeservicecart';

const Homeservice = () => {
    const homeservice = useLoaderData();

    return (
        <div className='my-12'>
            <div >
                <div className='lg:grid grid-cols-3 gap-4  justify-items-center  '>
                    {
                        homeservice.map(homes => <Homeservicecart key={homes._id} homes={homes} />)
                    }

                </div>
            </div>

            <div className='flex justify-center'>

                <Link to='Allservicehome'>
                    <Button
                        outline={true}
                        gradientDuoTone="purpleToBlue"
                    >
                        see all
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default Homeservice;