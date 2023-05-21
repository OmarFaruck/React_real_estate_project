import React from 'react';
import heroimage from '../../images/hero-image.png'
import '../Heroimg/Heroimg.css'
const Heroimg = () => {
    return (
        <div className="heroimg">
            <img src={heroimage} alt="" className="img-fluid mx-auto d-block" />
        </div>
    );
};

export default Heroimg;