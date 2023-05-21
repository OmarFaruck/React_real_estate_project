import React from 'react';
import '../Populartext/Populartext.css'
import Popularimg from '../Popularimg/Popularimg';
const Populartext = () => {
    return (
        <div id="populartext">
            <div className="container">
                <h3>Best Choices</h3>
                <h1>Popular Residencies</h1>
                <Popularimg/>
            </div>
        </div>
    );
};

export default Populartext;