import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/UseContext';
import UseTitle from '../../Hooks/Usetitle';
import Addreviewtable from './addreviewtable/Addreviewtable';
// const { Message, email, name, photo, picture, price, rating, servicesName, services, _id } = rv;

const AddReview = () => {
    UseTitle('AddReview')
    const { users } = useContext(AuthContext);
    const [addReview, setAddReview] = useState([])
    // console.log(addReview)
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${users.email}`)
            .then(res => res.json())
            .then(data => setAddReview(data))
    }, [users?.email])

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
                            addReview.map(rv => <Addreviewtable key={rv._id} rv={rv} />)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};



export default AddReview;