import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);
    const { signIn, googleLog } = useContext(AuthContext); 
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? 'text' : 'password'} name="password" id="" required />
                    <p onClick={() => setShow(!show)}><small>
                        {
                            show ? <span className='little'>Hide Password </span> : <span className='little'>Show Password</span>
                        }
                    </small></p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='little'><small>Don't have an account? <Link to='/signup' className='little'>Create New Account</Link> </small></p>
            <hr />
            <button onClick={handleGoogle} className='media'><BsGoogle className='image1' /> Log in With Google</button>
        </div>
    );
};

export default Login;