import { Button } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SuccessBanner from '../../../Assets/SuccessBanner.jpg'
import Successcart from '../Successcart/Successcart';
const Success = () => {
    const Successdata = useLoaderData();
    return (
        <div>
            <div className='bg-black'>
                <img className='w-full h-80' src={SuccessBanner} alt="" />
            </div>
            <div className=' lg:grid grid-cols-3 gap-4  justify-items-center mt-6'>
                {
                    Successdata.map(sd => <Successcart key={sd._id} sd={sd} />)
                }
            </div>
            <div className='flex justify-center'>
                <Button

                    outline={true}
                    gradientDuoTone="purpleToBlue"
                >
                    <Link
                        to='/'>Back to homepage</Link>
                </Button>
            </div>
        </div>
    );
};

export default Success;