import React from 'react'; 
import Row from 'react-bootstrap/esm/Row';
import { FaEnvelope } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import '../Messege/Messege.css'
const Messege = () => {
    return (
        <div className="Card">
        <Row>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12">
                <div className="Contact_icon">
                    <FaEnvelope className='phone mx-auto d-block'/>
                </div>
            </div>
            
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-12">
                <div className="Contacttext">
                <p>Messege Call</p>
                    <h6>021 123 145 14</h6>
                </div>
            </div>
            <Link onClick={() => window.location = 'mailto:omarfaruck1944@gmail.com'}><button  className="btn btn-outline-primary w-100 messege">Message</button></Link>
        </Row>
    </div>
    );
};

export default Messege;