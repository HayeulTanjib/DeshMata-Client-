import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({deleteProduct, setDeleteProduct, refetch}) => {

    
    const {_id, name} = deleteProduct;

    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/deleteproduct/${_id}`, {
            method: "DELETE",
          
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${name} deleted successfully`);
                    setDeleteProduct(null)
                    refetch();
                }
            })
    } 

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500 text-center">Are Yor Sure to Delete {name}</h3>
                    <div class="modal-action flex justify-between">
                        <label for="delete-confirm-modal" class="btn btn-xs">Close</label>
                        <button onClick={() => handleDelete(_id)}  className='btn btn-xs btn-error'>Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteProductModal;