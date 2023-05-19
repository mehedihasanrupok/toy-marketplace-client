import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'
import { AuthContext } from '../../providers/AuthProvider';

const SignIn = () => {

    const [error, setError] = useState('');
    const [ok, setOk] = useState('');
    const {user,createUser,updateUser} = useContext(AuthContext);

    const handleSignUp = event =>{

    }

    return (
        <div>
            <div className='form-container2'>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label htmlFor="email">Name</label>
                        <input type="text" name="name" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Image Url</label>
                        <input type="text" name="image" id="" required />
                    </div>
                    <input className='btn-submit' type="submit" value="Register" />
                </form>
                <p><small className='little'>Already have an account? OR want login with google? <Link to='/login' className='little'>Login</Link> </small></p>
                <p className='text-error'>{error}</p>
                <p className='text-error'>{ok}</p>
            </div>
        </div>
    );
};

export default SignIn;