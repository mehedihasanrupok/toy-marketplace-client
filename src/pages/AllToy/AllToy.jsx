import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import AToy from './AToy';
import { useLocation } from 'react-router-dom';

const AllToy = () => {
    const { user } = useContext(AuthContext);
    const [allToys, setAllToys] = useState([]);

    const location = useLocation();

    // Update the document title based on the current location
    useEffect(() => {
        document.title = `BabyToy | ${location.pathname === '/allToy' ? 'All Toy' : ''}`;
    }, [location]);


    const url = `http://localhost:5000/addToy`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [url])

    return (
        <div>
            <h2 className='text-center text-5xl mb-3 mt-4'>All Toys</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(toy => <AToy
                                key={toy._id}
                                toy={toy}
                            ></AToy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;



// Seller: (if available) show the name of the person who posted the toy
// Toy Name
// Sub-category
// Price
// Available Quantity