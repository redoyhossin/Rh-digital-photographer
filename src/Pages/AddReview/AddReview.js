import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/UseContext';
import UseTitle from '../../Hooks/Usetitle';

const AddReview = () => {
    UseTitle('AddReview')
    const { users } = useContext(AuthContext);
    const [addReview, setAddReview] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${users.email}`)
            .then(res => res.json())
        .then(data=>setAddReview(data))
    },[users?.email])
    
    return (
        <div>
          {addReview.length}
        </div>
    );
};

export default AddReview;