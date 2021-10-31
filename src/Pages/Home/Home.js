import React from 'react';

import Banner from './Banner/Banner';
import Questions from './Questions/Questions';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Services></Services>
            <Reviews></Reviews>
            <Questions></Questions>

        </div>
    );
};

export default Home;