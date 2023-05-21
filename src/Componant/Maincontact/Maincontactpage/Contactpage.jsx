import React from 'react';
import Contacttext from '../Contacttext/Contacttext';
import Contactimg from '../Contactimg/Contactimg';
import Row from 'react-bootstrap/esm/Row';
import '../Maincontactpage/Contactpage.css'


const Contactpage = () => {
    return (
        <section id="contactpage">
            <div className="container">
                <Row className='align-items-center'>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                <Contacttext />

                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">     
                <Contactimg /> 
                </div>
                 
                </Row>
            </div>
        </section>
    );
};

export default Contactpage;