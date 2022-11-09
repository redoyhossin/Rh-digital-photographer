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
                        <code className='text-xl text-blue-600'>SQL</code>
                        A language used to communicate with databases for storage, deletion, updation, insertion and retrieval of data <br /> Supports table based data type , SQL is relational.SQL does not support hierarchical storage of data,It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis   <code className='text-xl text-blue-600'>NoSQL</code>It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form, A software to retrieve, store and manage scalability of databases.Supports document oriented, graph databases, key value pair-based ,Non-SQL is non relational.
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
                        First some termes d’art need to be disambiguated. It’s not uncommon to hear somebody refer to a REST API as simply an API. Likewise, we frequently see JWTs conflated with the pattern of JWT-based authentication. JWT on its own is nothing but an open standard (RFC 7519) for transmitting messages via HTTP. JWT as a standard can be used for any message at all. It has one characteristic in particular that makes it a good tool for sending a user’s identity to a backend service. We can trust the integrity of a JWT because JWTs are signed, making them tamper-proof. Token-based authentication is probably the most common method for authenticating requests to REST API endpoints. It works like this
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
                        <code className='text-xl text-blue-600'>javascript</code>
                        Javascript is a programming language that is used for writing scripts on the website,Javascript can only be run in the browsers,It is basically used on the client-side.	Javascript is capable enough to add HTML and play with the DOM. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox,Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox <code className='text-xl text-blue-600'>javascript</code> We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.,Nodejs does not have capability to add HTML tags.Nodejs does not have capability to add HTML tags.Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm
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
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default Blog;