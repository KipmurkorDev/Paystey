import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Chess() {

  let data=["helloe", "heellelelel"]
  return (
    <Container fluid style={{ padding: "4% 8%", backgroundColor: "#FDF9F5" }}>
      <Row className='gy-4'>
        {data.map((item, index) => {
          return (
            <Col md={{ span: 4 }} className='shadow-sm rounded '>
              <h4>{item}</h4>
              <p>{index}</p>
            </Col>
          )
        })
        }
      </Row>
    </Container>

  )
}

export default Chess