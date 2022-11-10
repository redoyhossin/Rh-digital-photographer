import React from 'react';
import UseTitle from '../../Hooks/Usetitle';
import Homeservice from './Homeservice/Homeservice';
import Secondsection from './secondsection/Secondsection';
import Sectiongallery from './sectiongallery/Sectiongallery';
import Slider from './slider/Slider';

const Home = () => {
  UseTitle('Home')
    return (
        <div>
        <Slider />
        <Homeservice />
        <Secondsection />
        <Sectiongallery/>
        </div>
    );
};

export default Home;