import React from 'react';

const Allreviewsaidcart = ({ ritem }) => {
    const { description, details, name,Message, picture, price, rating, _id } = ritem;
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-4">
                <div className="flex items-center">
                    <button type="button" className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                </div>
            </td>

            <th scope="row" className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src={picture} alt="Jese image" />
                <div className="pl-3">
                    <div className="text-base font-semibold">{name} </div>
                    <div className="font-normal text-gray-500"> </div>
                </div>
            </th>

            <td className="py-4 px-6">
                {Message}
            </td>
            <td className="py-4 px-6">
                <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full mr-2"> {rating} </div>
                </div>
            </td>

            <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> {price} </a>
            </td>
            <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> edit</a>
            </td>
        </tr>
    );
};

export default Allreviewsaidcart;