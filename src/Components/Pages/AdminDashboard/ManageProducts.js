import React, { useState } from 'react';
import useTools from '../../Hooks/useTools';
//import { useAuthState } from 'react-firebase-hooks/auth';
//import { useQuery } from 'react-query';
//import auth from '../../../Firebase/firebase-config';
import Loading from '../../Shared/Loading';
import DeleteProductModal from './DeleteProductModal';

const ManageProducts = () => {

  const [tools, isLoading, refetch] = useTools();

  const [deleteProduct, setDeleteProduct] = useState(null);


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
              <th>SL No.</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              tools.map((tool, index) => {
                const { name, img, price, available } = tool;
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{name}</td>
                    <td>
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </td>

                    <td>{price}$</td>
                    <td>{available} pcs</td>
                    <td><label onClick={() => setDeleteProduct(tool)} for="delete-confirm-modal" class="btn btn-sm btn-error">Delete</label></td>
                  </tr>
                )
              })
            }


          </tbody>
        </table>
      </div>

      {deleteProduct && <DeleteProductModal deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct} refetch={refetch} />}

    </div>
  );

};

export default ManageProducts;