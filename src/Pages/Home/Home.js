import React from 'react';
import UseTitle from '../../Hooks/Usetitle';
import Homeservice from './Homeservice/Homeservice';
import Slider from './slider/Slider';

const Home = () => {
  UseTitle('Home')
    return (
        <div>
        <Slider />
        <Homeservice/>
        </div>
    );
};

export default Home;