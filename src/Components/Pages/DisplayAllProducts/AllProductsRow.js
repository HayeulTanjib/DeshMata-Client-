import React from 'react';
import { Link } from 'react-router-dom';

const AllProductsRow = ({tool}) => {

    const {_id, name, img, description, minimumOrder, available, price} = tool

console.log(_id);
    return (
        <div>
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: {price}$</p>
                <p>Available: {available} Pcs</p>
                <p>Minimum Order: {minimumOrder} Pcs</p>
                <div class="card-actions">
                    <button class="btn btn-primary"> <Link to={`/purchase/${_id}`}>Buy Now</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default AllProductsRow;