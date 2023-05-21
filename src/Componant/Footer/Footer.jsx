import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import logo from '../images/logo2.png'
import '../Footer/Footer.css'
const Footer = () => {
    return (
        <section id='Footer'>
            <div className="container">
                <Row>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                        <img src={logo} alt="logo" className="img-fluid footerlogo" />
                        <div className="logo_text">
                            <p>Our vision is to make all people <br />
                                the best place to live for them.</p>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="logolast_text">
                            <h1>Information</h1>
                            <p>145 New York, FL 5467, USA</p>
                        </div>
                        <div className="lasttext">
                            <p>Property </p>
                            <p>Services</p>
                            <p>Product</p>
                            <p>About Us</p>
                        </div>
                    </div>
                </Row>
            </div>

        </section>
    );
};

export default Footer;