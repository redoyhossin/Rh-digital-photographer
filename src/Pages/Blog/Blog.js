import { Card } from 'flowbite-react';
import React from 'react';
import UseTitle from '../../Hooks/Usetitle';

const Blog = () => {
    UseTitle('Blog');
    return (
        <div className='lg:grid grid-cols-2 gap-4  justify-items-center px-12 my-10'>
            <div className='mb-4'>
                <Card >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Questions : Difference between SQL and NoSQL
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <p className='text-xl text-slate-700 text-semibold'>Answer:</p>
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
            <div className='mb-4'>
                <Card >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Questions : What is JWT, and how does it work?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <p className='text-xl text-slate-700 text-semibold'>Answer:</p>
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
            <div className='mb-4'>
                <Card >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Questions : What is the difference between javascript and NodeJS?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <p className='text-xl text-slate-700 text-semibold'>Answer:</p>
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
            <div className='mb-4'>
                <Card >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Questions : How does NodeJS handle multiple requests at the same time?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <p className='text-xl text-slate-700 text-semibold'>Answer:</p>
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default Blog;