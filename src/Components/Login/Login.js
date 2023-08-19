import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <Container className="Auth-form-container" fluid>
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
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
                            LOGIN
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Forgot <Link href="/" className='auth-link'>password?</Link> 
                    </p>
                    <p className='text-center pt-3'> or Login with:</p>
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
                    <p> Don't have an account?  <Link to="/signup" className='auth-link'>Sign up</Link></p>
                </div>
            </form>
        </Container>

    )
}

export default Login;