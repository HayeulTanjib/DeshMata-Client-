import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../Firebase/firebase-config';
import Loading from '../../Shared/Loading';
import DeleteOrderModal from './DeleteOrderModal';

const Myorders = () => {

    const [user] = useAuthState(auth);
    const {data: orders, isLoading, refetch} = useQuery('orders', ()=> fetch(`http://localhost:5000/order/${user?.email}`).then(res => res.json()))
    const [deleteOrder, setDeleteOrders] = useState(null);


    if(isLoading){
        return <Loading/>
    }

    return (
        <div>
            <h1>My Orders</h1>

            {/* Table */}
            <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      {
          orders.map((order, index) => {
            const {productName, price, quantity} = order;
            return(
                <tr>
                <th>{index + 1}</th>
                <td>{productName}</td>
                <td>{price}$</td>
                <td>{quantity} pcs</td>
                <label onClick={() => setDeleteOrders(order)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
              </tr>
            )
          })
      }

  
    </tbody>
  </table>
</div>

{deleteOrder && <DeleteOrderModal deleteOrder={deleteOrder} setDeleteOrders={setDeleteOrders} refetch={refetch} />}

        </div>
    );
};

export default Myorders;