import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import secondsection from '../../../Assets/secondsection.jpg'

const Secondsection = () => {
    return (
        <div>
            <section>
                <div className="dark:bg-violet-400">
                    <div className=" bg-slate-800 text-white container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">We offer photo editing services to photo photographers to handle all their needs in wedding, jewelry, portrait, landscape, beauty, real estate, ecommerce </h1>
                        
                        <div className="flex flex-wrap justify-center mt-2">

                            <Link to='/Allservicehome'>
                                <Button gradientDuoTone="purpleToBlue">
                                    Get started
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <img src={secondsection} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section>
        </div>
    );
};

export default Secondsection;