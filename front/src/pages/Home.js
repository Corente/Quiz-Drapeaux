import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <h1>Bonjour le site</h1>
            <p>Une petite app en react pour apprendre cte truc.</p>
            <p>Elle te permet de te tester sur tes conaissances des drapeaux.</p>
            <p>Essaie d'avoir le plus gros score possible en 2 minutes.</p>
        </div>
    );
};

export default Home;