import React from 'react';
import '../Contacttext/Contacttext.css'
import Call from '../Call/Call';
import Row from 'react-bootstrap/esm/Row';
import Chat from '../Chat/Chat';
import Video from '../Video/Video';
import Messege from '../Messege/Messege';
const Contacttext = () => {
    return (
        <div className='Contacttext'>
            <h5>Our Contact Us</h5>
            <h3>Easy to contact us</h3>
            <p className='always'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</p>
            <Row className='align-items-center'>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12"><Call /></div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12"><Chat /></div>
            </Row>
            <Row>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12"><Video /></div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12"><Messege /></div>
            </Row>

        </div>
    );
};

export default Contacttext;