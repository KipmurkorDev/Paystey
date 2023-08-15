import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    let d = new Date();
    let year = d.getFullYear();
    return (
        <footer style={{ paddingTop: "5%" }} className='text-light'>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h5 className='h-6 my-0'>Company </h5>
                        <div>
                            <Link className='footer-link' to="/about">About</Link>
                            <Link className='footer-link'>Impact</Link>
                            <Link className='footer-link'>Contact</Link>
                            <Link className='footer-link'>Careers</Link>
                            <Link as={Link} to="/" className='footer-link'>Blog</Link>
                        </div>
                    </div>

                    <div className="col-sm">
                        <h5 className='h-6 my-0'>Support</h5>
                        <div>
                            <Link className='footer-link'>Help</Link>
                            <Link className='footer-link'>Pricing</Link>
                            <Link className='footer-link'>Terms</Link>
                            <Link className='footer-link'>Policies </Link>
                            <Link className='footer-link'>Reviews </Link>
                        </div>
                    </div>
                    <div className="col-sm">
                        <h5 className='h-6 text-bold my-0'>Resources</h5>
                        <div>
                            <Link to='/furniture' className='footer-link'> API</Link>
                            <Link to='/collection' className='footer-link'> White Paper</Link>
                            <Link to='/collection' className='footer-link'>Partners </Link>
                            <Link to='/collection' className='footer-link'>Press </Link>

                        </div>
                    </div>

                    <div className="col-sm">
                        <p className='h-6 my-0'>Be part of our journey</p>
                        <div className='pt-2'>
                            <a className='social-media text-white h-1 fa-lg' href='https://twitter.com/stoickim' rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a>
                            <a className='social-media text-white h-1 fa-lg' href='https://web.facebook.com/emmanuel.kipmurkor/' rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a className='social-media text-white h-1 fa-lg' href='https://www.linkedin.com/company/paystey/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ paddingTop: "10%", paddingBottom: "2%" }}>
                    <p> Copyright &copy; {year} <span>Paystey Ltd- All Rights Reserved</span>  </p>
                </div>
            </div>

        </footer>
    )
}

export default Footer