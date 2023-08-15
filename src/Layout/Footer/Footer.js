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
                        <h5 className='h-6 my-0'>COMPANY </h5>
                        <div>
                            <Link className='footer-link' to="/about">About Us</Link>
                            <Link className='footer-link'>How it Works</Link>
                            <Link className='footer-link'>Contact Us</Link>
                            <Link className='footer-link'>Careers</Link>
                            <Link as={Link} to="/" className='py-sm-3 px-sm-3 text-light footer-link'>Blog</Link>
                        </div>
                    </div>
                    <div className="col-sm">
                        <h5 className='h-6 text-bold my-0'>SHOP</h5>
                        <div>
                            <Link to='/furniture' className='footer-link'> Furniture</Link>
                            <Link to='/collection' className='footer-link'> Collections</Link>
                        </div>
                    </div>
                    <div className="col-sm">
                        <h5 className='h-6 my-0'>INFORMATION</h5>
                        <div>
                            <Link className='footer-link'>Customer Service </Link>
                            <Link className='footer-link'>Help Center</Link>
                            <Link className='footer-link'>Returns</Link>
                            <Link className='footer-link'>TERM of Use</Link>
                            <Link className='footer-link'>Privacy Policy </Link>
                            <Link className='footer-link'>Reviews </Link>

                        </div>
                    </div>

                    <div className="col-sm">
                        <p className='h-6 my-0'>BE PART OF OUR JOURNEY</p>
                        <div className='pt-2'>
                            <a className='social-media text-white h-1 fa-lg' href='https://twitter.com/stoickim' rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faXTwitter}/></a>
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