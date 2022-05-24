import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/firebase-config';
import axios from 'axios';

const Purchase = () => {

    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [tools, setTools] = useState([]);
    const { _id, name, img, description, minimumOrder, available, price } = tools;
    

    useEffect(() => {
        fetch(`http://localhost:5000/purchase/${id}`)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [id])

    


    const handlePurchaseForm = async(e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const productName = e.target.productName.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const numQuantity = parseInt(quantity)
        const mobile = e.target.mobile.value;
        const address = e.target.address.value;

        const data = {name, email, productName, price, numQuantity, mobile, address}


        if(quantity >= minimumOrder && quantity <= available){
         await axios.post('http://localhost:5000/order', data)
            .then(res => {
                if(res.data.insertedId){
                    toast.success('Successfully Placed Order')
                }
            })
        }
        else{
            toast.error(`Minimum order quantity is ${minimumOrder} and Maximum is ${available}`)
        }
            e.target.reset();
    }



    return (
        <div className="">
            <div class="flex flex-col w-full lg:flex-row min-h-screen">
                <div class="grid flex-grow card rounded-box place-items-center">
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={img} alt="Tools" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{name}</h2>
                            <p>{description}</p>
                            <p>Price: {price}$</p>
                            <p>Available: {available} Pcs</p>
                            <p>Minimum Order: {minimumOrder} Pcs</p>
                        </div>
                    </div>
                </div>
                <div class="divider lg:divider-horizontal"></div>

                {/* Form */}
                <div class="grid flex-grow card rounded-box place-items-center">
                <form onSubmit={handlePurchaseForm}>
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input  type="text" name='name' value={user?.displayName} class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" name='email' value={user?.email} class="input input-bordered" />
                            
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Product Name</span>
                            </label>
                            <input  type="text" name='productName' value={name} class="input input-bordered" />
                            
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Price</span>
                            </label>
                            <input   type="text" name='price' value={price} class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Quantity</span>
                            </label>
                            <input  type="number" defaultValue={minimumOrder}   name='quantity' class="input input-bordered" />

                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Mobile No</span>
                            </label>
                            <input type="text" name='mobile' placeholder="Enter Mobile Number" class="input input-bordered" />
                    
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <textarea name="address" className='input input-bordered' id="" cols="30" rows="10"></textarea>
                            
                        </div>

                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Place Order</button>
                        </div>
                    </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Purchase;