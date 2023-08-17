import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image1 from "../Assests/ChessImages/0001.jpg"
import Image2 from "../Assests/ChessImages/002.jpg"
import Image3 from "../Assests/ChessImages/003.jpg"
import Image4 from "../Assests/ChessImages/004.jpg"
import { Link } from 'react-router-dom'

function Chess() {
  let data = [

    {
      title: " Bitrefill eSIM Albania",
      image: Image1,
      price:'$30',
      desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
    },

    {
      title: " Bitrefill eSIM Albania",
      image: Image2,
      price:'$8',
      desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
    },
    {
      title: " Bitrefill eSIM Albania",
      image: Image3,
      price:'$11',
      desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
    },
    {
      title: " Bitrefill eSIM Albania",
      image: Image4,
      price:'$20',
      desptions: "Purchase Bitrefill eSIMs with Bitcoin, ETH or Crypto and enjoy stable high-speed internet access. Instant email delivery. No account required. Start living on crypto! "
    }
  ]

  return (
    <Container fluid style={{ padding: "4% 8%", backgroundColor: "#FDF9F5" }}>
      <Row className='gy-4'>
        {data.map((item, index) => {
          return (
            <Col md={{ span: 4 }} className='shadow-sm rounded '>
              <Link  to="/" className='btn-item'> <img src={item.image} height={200} width={350} alt={index} />
                <h4 className='text-center pt-3'>{item.title}</h4>
                  <h4 className='text-center pt-1'>{item.price}</h4>

              </Link>
            </Col>
          )
        })
        }
      </Row>
    </Container>

  )
}

export default Chess