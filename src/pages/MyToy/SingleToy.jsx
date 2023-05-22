import React from 'react';
import { Link } from 'react-router-dom';

const SingleToy = ({ toy, handleDelete }) => {
    const { _id, toyName, sellerName, email, img, rating, quantity, subCategory, details, price } = toy;
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>

            </td>
            <td>
                {sellerName}
            </td>
            <td>{email}</td>
            <td>{toyName}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <th>
                <Link to={`updateToy/${toy._id}`}><button className="btn btn-ghost btn-xs">Update Toy</button></Link>
            </th>
        </tr>
    );
};

export default SingleToy;

//to={`/order/${orderId}/update`} cg
//to={`/updateToy/${_id}`