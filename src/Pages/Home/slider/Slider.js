import { Carousel } from 'flowbite-react';
import React from 'react';

const Slider = () => {
    return (
        <div> 
            <div className="lg:h-96 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel indicators={false}
                  
                >
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                        alt="..."
                    />
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;