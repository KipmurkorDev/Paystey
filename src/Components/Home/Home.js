import React, { useState } from 'react'
import { Col, Container, Row, Carousel, Button, Image } from 'react-bootstrap'
import Preview1 from '../../Assests/LayoutImages/preview-1.jpg'
import Preview2 from '../../Assests/LayoutImages/preview-2.jpg'
import Preview3 from '../../Assests/LayoutImages/preview-3.jpg'
import Preview4 from '../../Assests/LayoutImages/preview-4.jpg'
import HomeGif from '../../Assests/LayoutImages/a828fe17f0ad917ef2b3d8c2903826fc.gif'
import HomeGrown from '../../Assests/LayoutImages/home-grown.webp'
function Home() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Container fluid style={{ paddingLeft: "0%", backgroundColor: "#FDF9F5", width:"100vw" }} className='overflow-hidden'>
            <Col className='bg-image'>

                <Row className='py-5'>
                    <Col style={{ textAlign: 'center', marginTop: "20%" }} className='text-white pb-5'>
                        <h1 className='display-1 fw-bolder fs-1 '> Your Collection is Waiting</h1>
                        <p> Paystey  is the premier NFT marketplace for beginners, experts, and
                            <br />
                            everyone in-between - without the hassle of gas fees and failed transactions.

                        </p>
                        <Button type="button" className="btn btn-primary w-25 mx-3 mb-5">View Collection</Button>
                    </Col>
                </Row>
            </Col>
            <Col className='text-center pt-5 '>
                <h1 className='h3 mb-4'>Must Buy </h1>
                <p> Some of our favourite NFT picks this week.</p></Col>
            <Col>
                <Carousel activeIndex={index} onSelect={handleSelect} fade slide={false}>
                    <Carousel.Item className='center-block'>
                        <img src={Preview1} alt='fist img' className="home-img img-fluid w-100" />
                        <Carousel.Caption className='text-white'>
                            <h3>Lounge Collections</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={Preview2} alt='second img' className="home-img img-fluid w-100" />
                        <Carousel.Caption className='text-white'>
                            <h3>Axis Collection </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Preview3} alt='third img' className="home-img img-fluid w-100" />
                        <Carousel.Caption className='text-white'>
                            <h3>Gather Collection</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='text-white'>
                        <img src={Preview4} alt='fourth img' className=" home-img img-fluid w-100" />
                        <Carousel.Caption>
                            <h3>Bucktown Collection</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>

            <Col className='mt-5 pt-5 w-100'>
                <Row>
                    <img src={HomeGif} alt='gif-home' height={1000} className='home-img' />
                </Row>
            </Col>
            <Col className='px-5'>
                <Row>
                    <Col className=' text-center' style={{ paddingTop: "20%" }}  xs={12} lg={6} sm={12} xl={6}>
                        <h1 className='text-dark'>Homegrown</h1>
                        <p>
                        Embrace the boundless possibilities of the digital realm with the pioneering spirit of Paystey Company. 
                        Just as Paystey redefines innovation, let's redefine our own potential – just like digital fashion and NFTs have reshaped the world of creativity.
                         Let's dare to dream, explore new horizons, and wear our aspirations proudly, just as we adorn ourselves with the limitless possibilities that tomorrow brings.
</p>
                        <button className="btn btn-dark mb-5">Find Out More</button>
                    </Col>
                    <Col style={{paddingTop: "10%" }} xs={12}  sm={12} lg={6} xl={6}>
                        <img src={HomeGrown} alt='home-grown' className='home-grown-img' />
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default Home

