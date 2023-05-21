import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { FaMapMarkerAlt } from "react-icons/fa";
import '../Hero/Hero.css'
import Premium from '../Textanimation/Premium/Premium';
import Customer from '../Textanimation/Customer/Customer';
import Awards from '../Textanimation/Awards/Awards';
import Row from 'react-bootstrap/Row';

const Hero = () => {
    return (
        <div className="herotext">
            <div className="orangecircle"></div>
            <h1>Discover <br />Most Suitable <br />Most </h1>
            <h6>Find a variety of properties that suit you very easilty <br />
                Forget all difficulties in finding a residence for you</h6>
            <div className="input">
                <InputGroup className="mb-3">
                    <InputGroup.Text>
                        <FaMapMarkerAlt className='alart' />
                    </InputGroup.Text>
                    <Form.Control />
                    <InputGroup.Text>
                        <Button className='input_search'>Search</Button>
                    </InputGroup.Text>
                </InputGroup>
            </div>
            <div className="text_animation">
                <Row>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12">
                        <Premium />
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12">
                        <Customer />
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12">
                        <Awards />
                    </div>

                </Row>

            </div>
        </div>
    );
};

export default Hero;