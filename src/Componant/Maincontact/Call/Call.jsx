import React from 'react'; 
import Row from 'react-bootstrap/esm/Row';
import { FaPhoneAlt } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import '../Call/Call.css'
const Call = () => {
    return (
        <div className="Card">
            <Row>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12">
                    <div className="Contact_icon">
                        <FaPhoneAlt className='phone mx-auto d-block'/>
                    </div>
                </div>
                
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-12">
                    <div className="Contacttext">
                        <h5>Call</h5>
                        <h6>021 123 145 14</h6>
                    </div>
                </div>  
                <Link className='nav-link' to="tel:+8801858927228"><button className="btn btn-outline-primary w-100">Call Now</button></Link>
            </Row>
        </div>
    );
};

export default Call;