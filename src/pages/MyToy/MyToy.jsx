import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SingleToy from './SingleToy';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

const MyToy = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [sortType, setSortType] = useState('Ascending');

    const location = useLocation();

    // Update the document title based on the current location
   



    const url = `https://toy-marketplace-server-sooty-seven.vercel.app/addToy?email=${user?.email}&type=${sortType}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url,toys])
    console.log(sortType);


    useEffect(() => {
        document.title = `BabyToy | ${location.pathname === '/mytoy' ? 'MyToy' : ''}`;
    }, [location]);


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-sooty-seven.vercel.app/addToy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Items Deleted Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining);
                        }
                    })
            }
        })
    }



    return (
        <div>
            <h2 className='text-center text-5xl mb-3 mt-4'>Your Added Toy: {toys.length}</h2>
            <div className="flex items-center gap-3 mb-5">
                <p>Sort by price: </p>
                <select onChange={e => setSortType(e.target.value)} className='bg-gray-100 p-2 rounded '>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
            </div>
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
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <SingleToy
                                key={toy._id}
                                handleDelete={handleDelete}
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