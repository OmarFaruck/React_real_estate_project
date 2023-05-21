import React from 'react';
import img1 from '../images/prologis.png'
import img2 from '../images/tower.png'
import img3 from '../images/equinix.png'
import img4 from '../images/realty.png'
import Row from 'react-bootstrap/esm/Row';
import '../Mainimg/Imgsection.css'
const Imgsection = () => {
    return (
        <div className="imgsection">
            <div className="container">
                <Row>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12 top">
                        <img src={img1} alt="" className="img-fluid mx-auto d-block img1" />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12 top">
                        <img src={img2} alt="" className="img-fluid mx-auto d-block img1" />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12 top">
                        <img src={img3} alt="" className="img-fluid mx-auto d-block img1" />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12 top">
                        <img src={img4} alt="" className="img-fluid mx-auto d-block img1" />
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default Imgsection;