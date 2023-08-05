import React, { useState } from 'react'
import { Col, Container, Row, Carousel, Button, Image } from 'react-bootstrap'
import Preview1 from '../../Assests/Images/preview-1.jpg'
import Preview2 from '../../Assests/Images/preview-2.jpg'
import Preview3 from '../../Assests/Images/preview-3.jpg'
import Preview4 from '../../Assests/Images/preview-4.jpg'

function Home() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Container fluid style={{ paddingLeft: "0%" }} className='overflow-hidden'>
            <Col> THE DESIGN DESK </Col>
            <Col className='bg-image pt-5 ml-5'>
                <Row className='px-3 g-col-6 h1'>
                    <p className='mx-5'>New & Designed
                        <br />
                        with purpose
                    </p>
                    <Button type="button" className="btn btn-dark w-25 mx-5 mb-5">Shop Sofas</Button>
                </Row>
                <Row className='py-5 text-light'>
                    <Col style={{ textAlign: 'right', marginRight: "30px" }}>
                        <h1> Non-fungible token</h1>
                        <p> The World's Largest
                            Collection of Trading Cards.
                        </p>
                        <Button type="button" className="btn btn-dark w-25 mx-3 btn-lg mb-5">Shop Collection</Button>
                    </Col>
                </Row>
            </Col>
            <Col className='text-center text-light mt-5 pt-5' style={{backgroundColor:"#CAAFA8"}}>
                <h1 className='h3 mb-4'>Must Haves </h1>
                <p> Some of our favourite furnitures picks this week.</p>
                <Carousel activeIndex={index} onSelect={handleSelect} >
                    <Carousel.Item>
                        <img src={Preview1} alt='firt img' height={500} className="d-block w-100" />
                        <Carousel.Caption >
                            <h3>Lounge Collections</h3>
                            <p>Lounge in luxurious comfort with our collection of beautifully-crafted sofas and sectionals, in a variety of fabrics and leathers.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={Preview2} alt='second img' height={500} className="d-block w-100" />
                        <Carousel.Caption>
                            <h3>Axis Collection </h3>
                            <p>The live-anywhere, do-anything sofa. This timeless collection invites families to pile on its comfortable cushions clad in high performance fabrics</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Preview3} alt='third img' height={500} className="d-block w-100" />
                        <Carousel.Caption>
                            <h3>Gather Collection</h3>
                            <p>
                                Everyone’s invited to Gather. This top-rated collection is our perfect
                                mix of deep-seated, movie-night comfort and modern minimalism.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Preview4} alt='fourth img' height={500} className="d-block w-100" />
                        <Carousel.Caption>
                            <h3>Bucktown Collection</h3>
                            <p>
                                This gorgeous Bucktown Living Room Collection by Jackson Furniture features plenty of cushioned comfort and style.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>

            <Col>


                Discover Trading Cards by Category


            </Col>
        </Container>
    )
}

export default Home