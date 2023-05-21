import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
// import { AuthContext } from '../../providers/AuthProvider';

const SignIn = () => {

    const { user, createUser, updateUserData, logOut } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [ok, setOk] = useState('');


    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        // res.user
        //   ?.updateProfile({
        //     displayName: name,
        //   })

        setError('');
        setOk('');
        if (password.length < 6) {
            setError('Password must be 6 characters or longer.');
            return
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setOk('User Account Successfully Open');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Account Open Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                form.reset('');
                updateUserData(result.user, name, photo)
                    .then(() => {
                        console.log('User name and photo updated');
                    })
                    .catch(error => {
                        setError(error.message);
                    });
                    logOut();
            })
            .then(error =>{
                        console.log(error);
                    setError(error.message);
            })

        // createUser(email, password)
        //     .then(result => {
                        //         const loggedUser = result.user;
                        //         loggedUser.photoURL = image;
                        //         console.log(loggedUser);
                        //         setOk('User Account Successfully Open');
                        //         form.reset('');
                        //         updateUser(loggedUser, {
                        //             photoURL: "image",
                        //         })
                        //     })
                        //     .catch(error => {
                        //         console.log(error);
                        //         setError(error.message);
                        //     })


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
                                    <input type="text" name="photo" id="" required />
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