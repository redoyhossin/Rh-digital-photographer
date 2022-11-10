import React from 'react';
import pic5 from '../../../Assets/gallery/pic5.jpg'
import pic6 from '../../../Assets/gallery/pic6.jpg'
import pic7 from '../../../Assets/gallery/pic7.jpg'
import pic8 from '../../../Assets/gallery/pic8.jpg'
import pic9 from '../../../Assets/gallery/pic9.jpg'
import pic10 from '../../../Assets/gallery/pic10.jpg'
import pic11 from '../../../Assets/gallery/pic11.jpg'
import pic12 from '../../../Assets/gallery/pic12.jpg'
import pic13 from '../../../Assets/gallery/pic13.jpg'
import pic14 from '../../../Assets/gallery/14.jpg'
import pic15 from '../../../Assets/gallery/pic5.jpg'

const Sectiongallery = () => {
    return (
        <div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src={pic5} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={pic6} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={pic7} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={pic8} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={pic9} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={pic10} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={pic11} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={pic12} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={pic13} />
                    <img src={pic14} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                    <img src={pic15} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                </div>
            </section>
        </div>
    );
};

export default Sectiongallery;