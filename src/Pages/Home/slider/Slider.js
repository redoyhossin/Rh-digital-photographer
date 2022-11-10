import { Carousel } from 'flowbite-react';
import React from 'react';
import pic1 from '../../../Assets/Carousel/pic1 (2).jpg'
import pic2 from '../../../Assets/Carousel/pic2.jpg'
import pic3 from '../../../Assets/Carousel/pic3.jpg'
import pic4 from '../../../Assets/Carousel/pic4.jpg'


const Slider = () => {
    return (
        <div> 
            <div className="lg:h-96 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel indicators={false}
                  
                >
                    <img
                        src={pic1}
                        alt="..."
                    />
                    <img
                        src={pic2}
                        alt="..."
                    />
                    <img
                        src={pic3}
                        alt="..."
                    />
                    <img
                        src={pic4}
                        alt="..."
                    />
                   
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;