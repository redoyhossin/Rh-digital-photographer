import React, { useEffect } from 'react';
import { useState } from 'react';
import Allreviewsaidcart from './allreviewsaidcart/Allreviewsaidcart';

const Allreviewsaid = () => {
    const [reviewitemall,setreviewitemall] =useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setreviewitemall(data));
    }, )
    
    return (
        <div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    delete
                                </div>
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Message
                            </th>
                            <th scope="col" className="py-3 px-6">
                                rating
                            </th>
                            <th scope="col" className="py-3 px-6">
                                price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                edit
                            </th>
                        </tr>
                    </thead>


                    <tbody>
                        {
                            reviewitemall.map(ritem => <Allreviewsaidcart key={ritem._id} ritem={ ritem} />)
                        }
                       
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Allreviewsaid;