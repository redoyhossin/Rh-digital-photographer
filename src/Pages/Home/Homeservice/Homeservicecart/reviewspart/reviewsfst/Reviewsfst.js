import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../../../context/UseContext';

const Reviewsfst = ({singleS}) => {
    const { description, details, name, picture, price, rating, _id } = singleS;
    const { users } = useContext(AuthContext);

console.log(singleS)


    const handlereview = (e) => {
        e.preventDefault();
        const form = e.target;
        const names = form.name.value;
        const email = form.email.value;
        const Message = form.Message.value;
        const photo = form.photo.value;
        

        const reviews = {
            services: _id,
            servicesName: names,
            picture,
            price,
            rating,
            email,
            Message,
            photo,
            name
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('review success')
                    e.target.reset();
               }
            })
    }

    return (
        <div>
            <form onSubmit={handlereview}>

                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Name</label>
                    <input name='name' type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='' required />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input name='email' type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" defaultValue={users?.email} required />
                </div>



                <div className="mb-6">
                    <label htmlFor="photourl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">photo</label>
                    <input name='photo' type="photourl" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='' required />
                </div>

                <div>
                    <textarea name='Message' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>




            </form>
        </div>
    );
};

export default Reviewsfst;