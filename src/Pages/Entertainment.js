import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Image1 from "../Assests/ChessImages/017.jpg"
import Image2 from "../Assests/ChessImages/018.jpg"
import Image3 from "../Assests/ChessImages/019.jpg"
import Image4 from "../Assests/ChessImages/020.jpg"
import { Link } from 'react-router-dom'

function Entertainment() {
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
      <Row className='gy-4'>
      <h4> Top Superare Chess NFT</h4>
        {data.map((item, index) => {
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
      <Row className='pt-5 mt-5'>
      <h1> Paystey Ltd</h1>
        <p> Paystey stands as a thriving and dynamic collective of artists, collectors, curators, and innovators united by the common goal of creating NFT-native photography. Our vision sees the blockchain as the premier platform for the initiation of cultural exchanges involving photographic LayoutImages.
         By carefully curating content, we empower collectors to champion and amass new creations from a wide array of artists spanning the globe</p>
      </Row>
    </Container>

  )
}

export default Entertainment