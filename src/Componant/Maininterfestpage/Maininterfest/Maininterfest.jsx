import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Ourinterfestimg from '../Ourinterfestimg/Ourinterfestimg';
import Ourinterfesttext from '../Ourinterfesttext/Ourinterfesttext';
import '../Maininterfest/Maininterfest.css'
const Maininterfest = () => {
    return (
        <div id="maininterfest">
            <div className="container">
                <Row className='align-items-center'>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                        <Ourinterfestimg/>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                      <Ourinterfesttext/>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default Maininterfest;