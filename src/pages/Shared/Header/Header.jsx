import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/2.jpg'
import './Header.css'

const Header = () => {

    return (
        <div className='flex justify-between font-bold items-center bg-red-300'>
            <div className='p-3'>
                <img className='my-logo' src={logo} alt="" />
                <h3 className='text-orange-500 italic font-bold text-3xl'>Baby Toy</h3>
            </div>
            <div className='p-4 space-x-5 items-center'>
                <Link to='/'>Home</Link>
                <Link>My Toys</Link>
                <Link>All Toys</Link>
                <Link to='/blogs'>Blogs</Link>
            </div>
            <div className='p-4 justify-around space-x-2.5'>
                <Link>Login</Link>
                <button>MyPicture</button>
            </div>
        </div>
    );
};

export default Header;