import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/2.jpg'
import './Header.css'
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.log(error))
    }

    return (
        <div className='md:flex justify-between font-bold items-center bg-red-300'>
            <div className='p-3'>
                <img className='my-logo' src={logo} alt="" />
                <h3 className='text-orange-500 italic font-bold text-3xl'>Baby Toy</h3>
            </div>
            <div className='p-4 space-x-5 items-center sm:flex-col lg:flex-row'>
                <Link to='/'>Home</Link>
                {user && <Link to='/mytoy'>My Toys</Link>}
                {user && <Link to='/addtoy'>Add Toys</Link>}
                <Link to='/blogs'>Blogs</Link>
                <Link to='/allToy'>All Toy</Link>
            </div>
            <div className='p-4 md:flex-col lg:flex-row justify-around space-x-2.5'>
                {user?.email ? <>
                    <button className='w-10 h-10 rounded-full'><img title={user.displayName} src={user?.photoURL} alt="" /></button>
                    <button onClick={handleLogOut}>Log out</button>
                </> :
                    <li><Link to='/login'>Login</Link></li>
                }
            </div>
        </div>
    );
};

export default Header;