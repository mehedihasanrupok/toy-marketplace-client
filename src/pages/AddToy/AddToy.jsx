import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AddToy = () => {
    const {user} = useContext(AuthContext);


    const handleAddToy = event =>{
        event.preventDefault();

        const form = event.target;

        const  name = form.name.value;
        const seller = form.seller.value;
        const email = user?.email;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const subCategory = form.subCategory.value;
        const details = form.details.value;
        const order = {
           customerName: name,
           email,
           img: img,
           date,
           service: title,
           service_id:_id,
           price : price
        }
        console.log(order);

        // fetch('http://localhost:5000/bookings',{
        //    method: 'POST',
        //    headers:{
        //        'content-type':'application/json'
        //    },
        //    body: JSON.stringify(order)
        // })
        // .then( res => res.json())
        // .then(data =>{
        //    console.log(data);
        //    if(data.insertedId){
        //        alert('Service Booked Successfully');
        //        form.reset();
        //    }
        // })
   }




    return (
        <div className='mb-5 mt-5'>
            <h2 className='text-center text-3xl mb-2'>Add A Toy </h2>
            <form onSubmit={handleAddToy}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-red-400'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller name</span>
                        </label>
                        <input type="text" name='seller' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price: </span>
                        </label>
                        <input type="text" name='price' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity: </span>
                        </label>
                        <input type="text" name='quantity' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" name='subCategory' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name='details' className="input input-bordered btn-block" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            {/* <div className="card-body">
                
            </div> */}
        </div>
    );
};

export default AddToy;