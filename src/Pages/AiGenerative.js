
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Image1 from "../Assests/ChessImages/013.jpg"
import Image2 from "../Assests/ChessImages/014.jpg"
import Image3 from "../Assests/ChessImages/015.jpg"
import Image4 from "../Assests/ChessImages/016.jpg"
import { Link } from 'react-router-dom'
function AiGenerative() {
    let data = [

        {
            title: " Bitrefill eSIM Albania",
            image: Image1,
            price: '$30',
            desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
        },

        {
            title: " Bitrefill eSIM Albania",
            image: Image2,
            price: '$8',
            desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
        },
        {
            title: " Bitrefill eSIM Albania",
            image: Image3,
            price: '$11',
            desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
        },
        {
            title: " Bitrefill eSIM Albania",
            image: Image4,
            price: '$20',
            desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
        },
        {
            title: " Bitrefill eSIM Albania",
            image: Image3,
            price: '$11',
            desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
        },
        {
            title: " Bitrefill eSIM Albania",
            image: Image3,
            price: '$11',
            desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
        },
        {
            title: " Bitrefill eSIM Albania",
            image: Image3,
            price: '$11',
            desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
        },
        {
            title: " Bitrefill eSIM Albania",
            image: Image3,
            price: '$11',
            desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
        },
        {
            title: " Bitrefill eSIM Albania",
            image: Image3,
            price: '$11',
            desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
        },
        {
            title: " Bitrefill eSIM Albania",
            image: Image2,
            price: '$8',
            desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
        },
        {
            title: " Bitrefill eSIM Albania",
            image: Image2,
            price: '$8',
            desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
        },
        {
            title: " Bitrefill eSIM Albania",
            image: Image3,
            price: '$11',
            desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
        },
    ]
    return (
        <Container fluid style={{ padding: "4% 4%", backgroundColor: "#FDF9F5" }}>
        <h4> Top Superare Pokemon NFT</h4>
            <Row>
                {
                    data.map((item, index) => {
                        return (
                            <Col md={{ span: 4 }} lg={{ span: 4 }} sm={{ span: 6 }} className='shadow-sm rounded'>
                                <Link to="/" className='btn-item'>
                                    <Image src={item.image} alt={index} fluid className='w-100 pt-3 h-75' />
                                    <h4 className='text-center pt-3'>{item.title}</h4>
                                    <h6 className='text-center pt-1 pb-2'>{item.price}</h6>
                                </Link>
                            </Col>
                        )

                    })
                }
            </Row>
        </Container>
    )
}

export default AiGenerative