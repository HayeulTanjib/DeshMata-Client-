import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DeleteUserOrderModal from './DeleteUserOrderModal';

const ManageAllOrders = () => {
    
    const { data: allorders, isLoading, refetch } = useQuery('allorders', () => fetch('http://localhost:5000/allorders').then(res => res.json()))
    
    const [deleteOrder, setDeleteOrder] = useState(null)
    
    if (isLoading) {
       return <Loading />
    }

    console.log(allorders);

    return (
        <div>
            <h3>Manage All Products</h3>
            {/* Table */}
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Ordered Quantity</th>
                            <th>User Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allorders.map((order, index) => {
                                const { productName, email, price, quantity } = order;
                                return (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{productName}</td>
                                        <td>{price}$</td>
                                        <td>{quantity}</td>
                                        <td>{email}</td>
                                        <td><label onClick={() => setDeleteOrder(order)}  for="delete-confirm-modal" class="btn btn-sm btn-error">Delete</label></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {deleteOrder && <DeleteUserOrderModal deleteOrder={deleteOrder} setDeleteOrder={setDeleteOrder} refetch={refetch} />}
        </div>
    );
};

export default ManageAllOrders;