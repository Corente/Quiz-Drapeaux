import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation />
            <h1>À propos</h1>
            <br/>
            <p>Petit jeu de géo pour apprendre le react.</p>
            <p>Crée par Corentin Ourvoy.</p>
            <p>Pas de Rgpd car je stocke 0 info personelle.</p>
        </div>
    );
};

export default About;