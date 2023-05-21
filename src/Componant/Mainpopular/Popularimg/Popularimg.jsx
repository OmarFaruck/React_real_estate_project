import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import img1 from '../../images/slider1.png'
import img2 from '../../images/slider1.png'
import img3 from '../../images/slider1.png'
import img4 from '../../images/slider1.png'
import Card from 'react-bootstrap/Card';
import '../Popularimg/Popularimg.css'

const Popularimg = () => {
    return (
        <div className='Popularimg'>
            <Row>
                <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12">
                    <Card className='mx-auto mb-3' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title> <span className='doller'>$</span> 47,043</Card.Title>
                            <Card.Text className='cardtext'>
                            Aliva Priva Jardin
                            </Card.Text>
                            <Card.Text>
                            Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                </div>

                <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12">
                <Card className='mx-auto mb-3' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title><span className='doller'>$</span>66,353</Card.Title>
                            <Card.Text className='cardtext'>
                            Asatti Garden City
                            </Card.Text>
                            <Card.Text>
                            Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                </div>

                <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12">
                <Card className='mx-auto mb-3' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title><span className='doller'>$</span>35,853</Card.Title>
                            <Card.Text className='cardtext'>
                            Citralan Puri Serang
                            </Card.Text>
                            <Card.Text>
                            Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                </div>

                <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12">
                <Card className='mx-auto mb-3' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title><span className='doller'>$</span>47,043</Card.Title>
                            <Card.Text className='cardtext'>
                            Aliva Priva Jardin.
                            </Card.Text>
                            <Card.Text>
                            Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                </div>

            </Row>
        </div>
    );
};

export default Popularimg;