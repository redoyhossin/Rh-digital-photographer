import { Rating } from 'flowbite-react';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import Allreviewsaid from '../../AddReview/allreviewsaid/Allreviewsaid';
import Reviewsfst from './Homeservicecart/reviewspart/reviewsfst/Reviewsfst';

const Singleservice = () => {
    const singleS = useLoaderData();
    const { description, details, name, picture, price, rating, _id } = singleS;
    return (
        <div className='mb-10'>
            <div className='  lg:flex lg:justify-around px-5 my-4'>
                <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 mb-3 ">
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
                            <p className="dark:text-gray-100 text-xl">{description}</p>
                            <p className="dark:text-gray-100 text-base">{details}</p>

                        </div>

                    </div>
                </div>

                <div >
                    <Reviewsfst singleS={singleS} />
                </div>
            </div>
            <div className='mb-10'>
                <Allreviewsaid />
            </div>
        </div>
    );
};

export default Singleservice;