import React from 'react';
import Hero from '../Hero/Hero';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Heroimg from '../Heroimg/Heroimg';
import '../Heromainpage/Heromainpage.css'
const Heromainpage = () => {
    return (
        <section id='Hero'>
            <Container>
                <Row className='align-items-center'>
                    
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 top">
                        <Hero />
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 top">
                        <Heroimg />
                    </div>

                </Row>
            </Container>
        </section>
    );
};

export default Heromainpage;