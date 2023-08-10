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
        <Container fluid style={{ paddingLeft: "0%" }} className='overflow-hidden'>
            <Col className='bg-image'>
                <Row className='px-2 g-col-6 h1 pt-5'>
                    <p className='mx-2'>New & Designed
                        <br />
                        with purpose
                    </p>
                    <Button type="button" className="btn btn-dark w-25 mx-4 mb-5">Shop Sofas</Button>
                </Row>
                <Row className='py-5 text-dark'>
                    <Col style={{ textAlign: 'right', marginRight: "30px" }}>
                        <h1> Non-fungible token</h1>
                        <p> The World's Largest
                            Collection of Trading Cards.
                        </p>
                        <Button type="button" className="btn btn-dark w-25 mx-3 mb-5">Shop Collection</Button>
                    </Col>
                </Row>
            </Col>
            <Col className='text-center text-light mt-5 pt-5' style={{ backgroundColor: "#CAAFA8" }}>
                <h1 className='h3 mb-4'>Must Haves </h1>
                <p> Some of our favourite furnitures picks this week.</p>
                <Carousel activeIndex={index} onSelect={handleSelect} >
                    <Carousel.Item>
                        <img src={Preview1} alt='firt img' className="d-block w-100 home-img" />
                        <Carousel.Caption >
                            <h3>Lounge Collections</h3>
                            <p>Lounge in luxurious comfort with our collection of beautifully-crafted sofas and sectionals, in a variety of fabrics and leathers.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={Preview2} alt='second img' className="d-block w-100 home-img" />
                        <Carousel.Caption>
                            <h3>Axis Collection </h3>
                            <p>The live-anywhere, do-anything sofa. This timeless collection invites families to pile on its comfortable cushions clad in high performance fabrics</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Preview3} alt='third img' className="d-block w-100 home-img" />
                        <Carousel.Caption>
                            <h3>Gather Collection</h3>
                            <p>
                                Everyone’s invited to Gather. This top-rated collection is our perfect
                                mix of deep-seated, movie-night comfort and modern minimalism.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Preview4} alt='fourth img' className="d-block w-100 home-img" />
                        <Carousel.Caption>
                            <h3>Bucktown Collection</h3>
                            <p>
                                This gorgeous Bucktown Living Room Collection by Jackson Furniture features plenty of cushioned comfort and style.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>

            <Col className='mt-5 pt-5 w-100'>
                <Row>
                    <img src={HomeGif} alt='gif-home' className='home-img' />
                </Row>
            </Col>
            <Col className='px-5' style={{ backgroundColor: "#FDF9F5" }}>
                <Row>
                    <Col className='w-25 text-center' style={{ paddingTop: "20%" }}>
                        <h1 className='text-dark'>Homegrown</h1>
                        <p>
                            We love all of our beautiful brands here at Paystey but there is a special place in our heart for the Austrilia brands.
                            We have made it easy for you to find a little about each of these amazing brands.
                        </p>
                        <button className="btn btn-dark mb-5">Find Out More</button>
                    </Col>
                    <Col className='w-75' style={{ paddingTop: "10%" }}>
                        <img src={HomeGrown} alt='home-grown' className='home-grown-img' />
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default Home

