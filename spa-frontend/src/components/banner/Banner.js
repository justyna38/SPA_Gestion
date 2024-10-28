import React from 'react';
import './Banner.css'; // On va y gérer le style de la bannière

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Laissez leur une seconde chance</h1>
                <p>
                    DONNONS-LEUR AUTANT QU'ILS NOUS APPORTENT !.</p>
                <div className="cta-buttons">
                    <button className="btn btn-primary">Adopter</button>
                    <button className="btn btn-secondary">Donation</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
