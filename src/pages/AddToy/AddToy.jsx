import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AddToy = () => {
    const {user} = useContext(AuthContext);


    const handleBookService = event =>{
        event.preventDefault();

        const form = event.target;
        const  name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const amount = form.amount.value;
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
        <div className='mb-5'>
            <h2 className='text-center text-3xl'>Add A Toy: </h2>
            <form onSubmit={handleBookService}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name='amount' defaultValue={'$' + price} className="input input-bordered" />
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