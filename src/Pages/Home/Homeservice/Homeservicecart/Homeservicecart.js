import { Button, Card, Rating } from 'flowbite-react';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Homeservicecart = ({ homes }) => {
    const { description, details, name, picture, price, rating, _id } = homes;
    return (
        <div className='flex justify-center mb-6'>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 ">
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-64 dark:bg-gray-500" />
                    </PhotoView>
                </PhotoProvider>
                <div className="flex flex-col justify-between p-4 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name} </h2>
                        <h2 className="text-xl font-semibold tracking-wide">{price} </h2>
                        <Rating>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                {rating}
                            </p>
                        </Rating>
                        <p className="dark:text-gray-100">{description.slice(0, 100)}...</p>
                        <Link to={`/Singleservice/${_id}`}>
                            <Button className='mt-2'>
                                view details
                            </Button>
                        </Link>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Homeservicecart;