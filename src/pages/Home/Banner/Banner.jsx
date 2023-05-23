import React from 'react';
import img from '../../../../public/b2.jpg'


const Banner = () => {
    return (
        <div className='mt-5 mb-5'>
            <div className='max-w-full relative' data-aos="fade-right">
                <img className='rounded-2xl' src={img} alt="" />
                {/* <div className='absolute bottom-0 right-0'>
                    <h3 className='text-center'><span className='text-5xl font-extrabold text-indigo-600'>Toy Kids</span> <br /> 
                    <span className='text-3xl font-bold text-indigo-300'>Bazar and Festivals</span> <br /><span className='text-2xl font-bold text-indigo-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Aliquid, velit! Voluptate, possimus recusandae earum laboriosam illum eius modi autem, architecto consectetur quos repudiandae! L
                    aboriosam, reprehenderit unde nemo quaerat.</span> <br />
                    </h3>
                    <img className='items-center mx-auto mb-4' src={icon} alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default Banner;