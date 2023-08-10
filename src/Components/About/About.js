import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import About1 from '../../Assests/Images/About1.jpg'
import About2 from '../../Assests/Images/About2.jpg'
import About3 from '../../Assests/Images/About3.jpg'
import Founder from '../../Assests/Images/founder.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faCertificate, faGift, faHandshake} from '@fortawesome/free-solid-svg-icons'
function About() {
  return (
    <Container style={{ backgroundColor: "#F7F0EA" }} fluid>
      <Row>
        <Col style={{ paddingTop: "15%" }} className='w-50 text-center'>
          <h1> Our Brand</h1>
          <p> At Paystey, we are driven by a singular mission - to redefine the e-commerce experience through cutting-edge payment solutions. Our dedication to excellence and innovation fuels our commitment to delivering seamless and secure payment options to our valued customers.</p>
        </Col>
        <Col className='w-50'>
          <Image src={About1} className='pt-5 mt-5 w-100' />

        </Col>
      </Row>
      <Row>
        <Col className='w-50'>
          <Image src={About2} className='w-100' />

        </Col>
        <Col style={{ paddingTop: "20%" }} className='w-50 text-center'>
          <h1> Our why</h1>
          <p> We believe in the boundless potential of human ingenuity and ambition. Our "why" centers on unlocking possibilities for individuals and businesses alike. We envision a world where every aspiration, no matter how grand, is within reach. By offering versatile payment solutions that transcend borders and currencies, we empower dreams to take flight.</p>
        </Col>
      </Row>
      <Row style={{ paddingBottom: "6%" }}>
        <Col style={{ paddingTop: "15%" }} className='w-50 text-center'>
          <h1> Our approach</h1>
          <p> At Paystey, our approach to payments is more than a strategy; it's a commitment to redefining the way transactions are conducted.
           Our approach encompasses the principles, technologies, and values that guide every aspect of our payment solutions.
           Central to our approach is the integration of both Bitcoin and Dollars. We recognize that in today's global landscape, choice matters. 
           By providing the flexibility to transact in either cryptocurrency or traditional currency, we empower you to make transactions aligned with your preferences.
            This dual currency approach is a testament to our commitment to adaptability and choice.</p>
        </Col>
        <Col className='w-50'>
          <Image src={About3} className='w-100' />
        </Col>
      </Row>
      <Col><h1 className='text-center'> Our Team </h1></Col>
      <Row style={{ paddingBottom: "8%" }}>
        <Col className='text-end w-50 mr-5'>
          <Image src={Founder} />
          <p> Kipmurkor Emmanuel </p>
          <h6>Founder</h6>
        </Col>
        <Col className='px-5'>
          <i class="fa fa-user" aria-hidden="true"></i>
          <p> Kim Lee </p>
          <h6>Team Member</h6>
        </Col>
      </Row>
      <Row className='text-center' style={{ paddingBottom: "10%" }}>
        <Col>
          <FontAwesomeIcon icon={faGlobe} />
          <h6> Worldwide Shipping</h6>
          <p> Our worldwide shipping service is more than just logistics; it's about building bridges across continents. We believe that products have the power to transcend geographical boundaries, connecting people and cultures.
           Through our expansive shipping network, we bring the world to your doorstep, enabling you to access a global marketplace without leaving your home.</p>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faCertificate} />
          <h6> Best Quality</h6>
          <p> At Paystey, the pursuit of the highest quality is etched into our DNA.
           We understand that when you choose our products and services, you're not just seeking functionality; you're seeking an experience that exceeds expectations. Our commitment to best quality is a promise to deliver excellence in every facet of what we offer.</p>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faGift} />
          <h6> Best Offers</h6>
          <p> At Paystey, our commitment to you goes beyond transactions; it extends to providing the best offers that truly enhance your experience. 
          We understand that value is not just about affordability; it's about ensuring that every interaction with us leaves you feeling valued and satisfied. Our best offers are a reflection of our dedication to delivering unparalleled value and enriching your journey with us.</p>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faHandshake} />
          <h6> Secure Payments</h6>
          <p> At Paystey, security is not just a feature; it's the foundation upon which we build trust and enable seamless transactions. 
          Our commitment to secure payment is unwavering, ensuring that your sensitive information is safeguarded, your transactions are protected, and your confidence in us is well-placed.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default About