import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({deleteOrder, setDeleteOrders, refetch}) => {

    
    const {email, productName} = deleteOrder;

    const handleDelete = (email) => {

        fetch(`http://localhost:5000/myorder/${email}`, {
            method: "DELETE",
          
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${productName} deleted successfully`);
                    setDeleteOrders(null)
                    refetch();
                }
            })
    } 

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500 text-center">Are Yor Sure to Delete {productName}</h3>
                    <div class="modal-action flex justify-between">
                        <label for="delete-confirm-modal" class="btn btn-xs">Close</label>
                        <button onClick={() => handleDelete(email)}  className='btn btn-xs btn-error'>Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteOrderModal;