import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Success = () => {
    const Successdata = useLoaderData();
    console.log(Successdata)
    return (
        <div>
            <h1>{Successdata.length}</h1>
        </div>
    );
};

export default Success;