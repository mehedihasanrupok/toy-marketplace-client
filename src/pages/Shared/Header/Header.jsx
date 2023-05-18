import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/2.jpg'
import './Header.css'

const Header = () => {
    
    return (
       <div>
          <div className='p-3'>
             <img className='my-logo' src={logo} alt="" />
             <h3 className='text-orange-500 italic font-bold text-3xl'>Baby Toy</h3>
          </div>
          <div>
            <Link></Link>
          </div>
          <div>

          </div>
       </div>
    );
};

export default Header;