import React from 'react';
import Posts from '../Post/Posts';
import Banner from './Banner';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Posts/>
        </div>
    );
};

export default Home;