import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <Container className="Auth-form-container" fluid>
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="form-group mt-3">
                        <label>First Name</label>
                        <input type="text" className="form-control mt-1" placeholder="e.g John" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Surname</label>
                        <input type="text" className="form-control mt-1" placeholder="e.g Doe" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input type="email" className="form-control mt-1" placeholder="Enter email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password" className="form-control mt-1" placeholder="Enter password" />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                         <Link to="/" className='auth-link'> Forgot password?</Link>
                    </p>
                    <p className='text-center pt-3'>or Sign up with:</p>
                    <div className='text-center pb-5'>
                        <Link>
                        <FontAwesomeIcon icon={faFacebook} className='fa-lg px-3' />
                        </Link>
                        <Link>
                        <FontAwesomeIcon icon={faGoogle} className='fa-lg' />
                        </Link>
                        <Link>
                        <FontAwesomeIcon icon={faLinkedin} className='fa-lg px-3' />
                        </Link>
                    </div>
                    <p> Registered?  <Link to="/login" className='auth-link'>Login</Link></p>
                </div>
            </form>
        </Container>

    )
}

export default Signup;