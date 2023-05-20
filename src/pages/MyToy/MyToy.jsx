import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SingleToy from './SingleToy';

const MyToy = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    const url = `http://localhost:5000/addToy?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url])

//     const handleDelete = id =>{
//         const proceed = confirm('Are you sure that you want delete the service?');
//         if(proceed){
//            fetch(`http://localhost:5000/bookings/${id}`,{
//                method: 'DELETE'
//            })
//            .then(res => res.json())
//            .then(data =>{
//                console.log(data);
//                if(data.deletedCount > 0){
//                    alert('Deleted Successfully');
//                    const remaining = bookings.filter(booking => booking._id !== id);
//                    setBookings(remaining);
//                }
//            })
//         }
//    }

//    const handleConfirm = id =>{
//     fetch(`http://localhost:5000/bookings/${id}`,{
//         method: 'PATCH',
//         headers:{
//            'content-type': 'application/json'
//         },
//         body: JSON.stringify({status: 'confirm'})
        
//     })
//     .then(res => res.json())
//     .then( data => {
//         console.log(data);
//         if( data.modifiedCount > 0){
//             //update state
//             const remaining = bookings.filter(booking => booking._id !== id);
//             const updated = bookings.find(booking => booking._id === id);
//             updated.status = 'confirm'
//             const newBookings = [updated, ...remaining];
//             setBookings(newBookings);

//         }
//     })
//    }

    return (
        <div>
            <h2>Your Added Toy: {toys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Seller</th>
                            <th>Email</th>
                            <th>Toy</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        toys.map(toy => <SingleToy
                        key={toy._id}
                        toy={toy}
                        ></SingleToy>)
                      }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;