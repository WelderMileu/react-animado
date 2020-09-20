import React from 'react';
import Products from '../components/Products';
import Global from '../style/global';
import Header from '../components/Header';

const Home = () => {
    return (
        <>
            <Global />
            <Header />
            <Products />
        </>
    );
}

export default Home;

