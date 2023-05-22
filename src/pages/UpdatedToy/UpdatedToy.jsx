import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatedToy = () => {

    const { id } = useParams();
    const toy = useLoaderData();
    const { _id, toyName, price, quantity, details } = toy;

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;

        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const updatedToy = { price, quantity, details };
        console.log(updatedToy);


        fetch(`http://localhost:5000/addToy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



    return (
        <div className=' align-middle'>
            <h2 className='text-5xl text-center'>Your Toy: {toyName}</h2>
            <div className='rounded mt-3 mx-auto bg-slate-500'>
                <form onSubmit={handleUpdateToy} >
                    <div className=" align-center form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ml-2">Toy Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' defaultValue={price} className="input input-bordered w-full ml-4" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-full ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' defaultValue={details} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" value="Update Your Toy" className="btn btn-block" />
                </form>
            </div>
        </div>
    );
};

export default UpdatedToy;
