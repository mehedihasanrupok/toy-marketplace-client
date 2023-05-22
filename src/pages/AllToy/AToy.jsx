import React from 'react';
import { Link } from 'react-router-dom';

const AToy = ({ toy }) => {
    const { _id, toyName, sellerName, img, quantity, subCategory, price } = toy;
    return (
            <tr>
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
                <td>{toyName}</td>
                <td>{quantity}</td>
                <td>{subCategory}</td>
                <td>${price}</td>
                <th>
                    <Link><button className="btn btn-ghost btn-xs">View Details</button></Link>
                </th>
            </tr>
    );
};

export default AToy;