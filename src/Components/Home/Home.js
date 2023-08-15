import React, { useState } from 'react'
import { Col, Container, Row, Carousel, Button, Image } from 'react-bootstrap'
import Preview1 from '../../Assests/Images/preview-1.jpg'
import Preview2 from '../../Assests/Images/preview-2.jpg'
import Preview3 from '../../Assests/Images/preview-3.jpg'
import Preview4 from '../../Assests/Images/preview-4.jpg'
import HomeGif from '../../Assests/Images/a828fe17f0ad917ef2b3d8c2903826fc.gif'
import HomeGrown from '../../Assests/Images/home-grown.webp'
function Home() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Container fluid style={{ paddingLeft: "0%", backgroundColor:"#FDF9F5" }} className='overflow-hidden'>
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
                <Carousel activeIndex={index} onSelect={handleSelect} fade slide={false} className='w-100'>
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
                    <Col className='w-25 text-center' style={{ paddingTop: "20%" }}>
                        <h1 className='text-dark'>Homegrown</h1>
                        <p>
                            We love all of our beautiful brands here at Paystey but there is a special place in our heart for the Australia, French and American brands.
                            We have made it easy for you to find a little about each of these amazing brands.
                        </p>
                        <button className="btn btn-dark mb-5">Find Out More</button>
                    </Col>
                    <Col className='w-100' style={{ paddingTop: "10%" }}>
                        <img src={HomeGrown} alt='home-grown' className='home-grown-img' />
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default Home

