import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const toy = useLoaderData();
    const { _id, toyName, sellerName, email, img, rating, quantity, subCategory, details, price } = toy;
    return (
        <div className=' align-middle'>
            <h2 className='text-5xl text-center'>Your Toy: {toyName}</h2>
            <div className='rounded mt-3 mx-auto bg-slate-500'>
                <form >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-red-400'>
                    <div className="ml-4 form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" readOnly defaultValue={toyName} name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller name</span>
                        </label>
                        <input type="text" readOnly name='seller' defaultValue={sellerName} className="input input-bordered" />
                    </div>
                    <div className="ml-4 form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" readOnly name='email' defaultValue={email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <img className='h-32 w-44 rounded' src={img} alt="" />
                    </div>
                    <div className="ml-4 form-control">
                        <label className="label">
                            <span className="label-text">Price: </span>
                        </label>
                        <input type="text" readOnly name='price' defaultValue={price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" readOnly name='rating' defaultValue={rating} className="input input-bordered" />
                    </div>
                    <div className="ml-4 form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity: </span>
                        </label>
                        <input type="text" readOnly name='quantity' defaultValue={quantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" readOnly name='subCategory' defaultValue={subCategory} className="input input-bordered" />
                    </div>
                    <div className="ml-4 form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" readOnly name='details' defaultValue={details} className="input input-bordered btn-block" />
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default ViewDetails;