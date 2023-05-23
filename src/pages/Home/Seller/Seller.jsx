import React from 'react';
import img from '../../../../public/company.jpg'

const Seller = () => {
    return (
        <div className='md:flex mb-5 mt-7' >
            <div>
                <img src={img} alt="" />
            </div>
            <div className='ml-5'>
                <h3 className='text-5xl text-orange-800 text-center mb-5'>Our Sellers</h3>
                <p className='text-2xl text-blue-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, totam? Quas distinctio nesciunt, suscipit laborum repudiandae
                    qui rerum aliquid expedita fugiat ex dolorem quibusdam incidunt dignissimos beatae, illo vero perferendis.</p>
            </div>
        </div>
    );
};

export default Seller;