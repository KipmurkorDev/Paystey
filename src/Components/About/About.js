import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import About1 from '../../Assests/LayoutImages/About1.jpg'
import About2 from '../../Assests/LayoutImages/About2.jpg'
import About3 from '../../Assests/LayoutImages/About3.jpg'
import Founder from '../../Assests/LayoutImages/founder.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCertificate, faGift, faHandshake } from '@fortawesome/free-solid-svg-icons'
function About() {
  return (
    <Container style={{ backgroundColor: "#F7F0EA" }} fluid>
      <Row>
        <Col style={{ paddingTop: "10%" }} className='w-50 text-center'>
          <h1> Our Brand</h1>
          <p> Paystey stands as a thriving and dynamic collective of artists, collectors, curators, and innovators united by the common goal of creating NFT-native photography.
            Our vision sees the blockchain as the premier platform for the initiation of cultural exchanges involving photographic LayoutImages.
            By carefully curating content, we empower collectors to champion and amass new creations from a wide array of artists spanning the globe.
          </p>
        </Col>
        <Col className='w-50'>
          <Image src={About1} className='pt-5 mt-5 w-100' />

        </Col>
      </Row>
      <Row>
        <Col className='w-50'>
          <Image src={About2} className='w-100' />

        </Col>
        <Col style={{ paddingTop: "10%" }} className='w-50 text-center'>
          <h1> Our why</h1>
          <p>
            We are driven by our belief that the blockchain holds the potential to revolutionize how cultural exchanges centered around photographic images take place.
            We envision the blockchain not only as a platform but as the very cornerstone for these exchanges, providing a unique and secure space for artists' work to find its cultural resonance.
          </p>
        </Col>
      </Row>
      <Row style={{ paddingBottom: "6%" }}>
        <Col style={{ paddingTop: "8%" }} className='w-50 text-center'>
          <h1> Our approach</h1>
          <p>
            At Paystey, our approach is centered around fostering a vibrant and dynamic ecosystem that brings together artists, collectors, curators, and innovators.
            We are united by a collective purpose: the advancement of NFT-native photography, uniting our diverse talents and perspectives to shape this emerging art form.
            Our driving force stems from our unwavering belief in the blockchain's potential to redefine cultural exchanges centered around photographic imagery.
            Beyond being a mere platform, we view the blockchain as the cornerstone of these exchanges, providing a secure and unparalleled space for artists' work to resonate culturally.
          </p>
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
          <i className="fa fa-user" aria-hidden="true"></i>
          <p> Kim Lee </p>
          <h6>Team Member</h6>
        </Col>
      </Row>
      <Row className='text-center' style={{ paddingBottom: "10%" }}>

        <Col>
          <FontAwesomeIcon icon={faCertificate} />
          <h6> Best Quality</h6>
          <p>
            At Paystey, we operate with a core commitment to cultivating a vibrant and dynamic ecosystem that unites artists, collectors, curators, and innovators.
            Our shared objective revolves around advancing the realm of NFT-native photography, harnessing our varied talents and viewpoints to shape the evolution of this nascent art form.
          </p>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faGift} />
          <h6> Best Offers</h6>
          <p>
            Presenting our exclusive offers at Paystey, where unparalleled opportunities await both artists and collectors alike.
            For artists, our platform serves as a launchpad to showcase your NFT-native photography to a global audience of enthusiasts and connoisseurs.
            Our meticulous curation ensures your work finds its rightful place in the spotlight, as we believe in championing the uniqueness of each creator's perspective.
          </p>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faHandshake} />
          <h6> Secure Payments</h6>
          <p>
            Rest assured, at Paystey, we prioritize the security of your payments with the utmost diligence.
            Our advanced payment infrastructure is fortified with cutting-edge encryption protocols and industry-standard security measures, ensuring your financial transactions are shielded from any potential threats.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default About