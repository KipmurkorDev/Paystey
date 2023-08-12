import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { data } from '../Layout/Index.js'

function Furniture() {

    return (
        <Container fluid style={{ backgroundColor: "#F7F0EA" }}>
            <Row>
                {data.map((Item) => {
                    return (
                        <Col>
                        {Item.title}
                        </Col>
                    )
                })
                }

            </Row>
        </Container>
    )
}

export default Furniture