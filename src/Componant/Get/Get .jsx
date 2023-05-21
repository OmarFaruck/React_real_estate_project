import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Container from 'react-bootstrap/esm/Container';
import '../Get/Get .css'
const Get = () => {
    return (
        <section id='Get'>
            <Container>
                <div className="Getstarted">
                    <h1>Get started</h1>
                    <h5>Subscribe and find super attractive price quotes from us. <br />
                        Find your residence soon</h5>
                        <Link className='nav-link' to="tel:+8801858927228"><button className="btn btn-outline-light">Get started</button></Link> 
                </div>
            </Container>
        </section>
    );
};

export default Get;