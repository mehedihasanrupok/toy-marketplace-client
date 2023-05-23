import React from 'react';

const Shop = () => {
    return (
        <div>
            <hr />
            <hr />
            <h2 className='text-5xl text-center text-orange-950'>Shop By Age</h2>
            <div className='justify-around mt-10 mb-7 md:flex-col lg:flex-row'>
                <button className="btn btn-circle h-32 w-32 hover:bg-red-700">
                    <h2>Age 4 to 6</h2>
                </button>
                <button className="btn btn-circle h-32 w-32 hover:bg-green-400">
                    <h2>Age 7 to 10</h2>
                </button>
                <button className="btn btn-circle h-32 w-32 hover:bg-blue-500">
                    <h2>Age 11 to 14</h2>
                </button>
                <button className="btn btn-circle h-32 w-32 hover:bg-orange-500">
                    <h2>Age 15 to 18</h2>
                </button>
                <button className="btn btn-circle h-32 w-32 hover:bg-emerald-600">
                    <h2>Age 19 to 21</h2>
                </button>           
            </div>
            <hr />
            <hr />
        </div>
    );
};

export default Shop;