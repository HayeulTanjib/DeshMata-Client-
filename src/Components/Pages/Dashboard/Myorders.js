import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase-config';
import Loading from '../../Shared/Loading';
import DeleteOrderModal from './DeleteOrderModal';

const Myorders = () => {

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://dry-escarpment-82110.herokuapp.com/order/${user?.email}`, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => {
    if (res.status === 401 || res.status === 403) {
      signOut(auth);
      localStorage.removeItem('accessToken');
      navigate('/');
    }
    return res.json()
  }))
  const [deleteOrder, setDeleteOrders] = useState(null);


  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='mt-12'>

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
                const { productName, price, numQuantity } = order;
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{productName}</td>
                    <td>{price}$</td>
                    <td>{numQuantity} pcs</td>
                    <td><label onClick={() => setDeleteOrders(order)} for="delete-confirm-modal" class="btn btn-sm btn-error">Delete</label></td>
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