import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Row from 'react-bootstrap/esm/Row';
import { FaCommentDots } from 'react-icons/fa';

const Video = () => {
    return (
        <div className="Card">
            <Row>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12">
                    <div className="Contact_icon">
                        <FaCommentDots className='phone mx-auto d-block'/>
                    </div>
                </div>
                
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-12">
                    <div className="Contacttext">
                    <p>Video Call</p>
                        <h6>021 123 145 14</h6>
                    </div>
                </div>
                <Link className='nav-link' to="tel:+8801858927228"><button className="btn btn-outline-primary w-100">Call Now</button></Link>
            </Row>
        </div>
    );
};

export default Video;