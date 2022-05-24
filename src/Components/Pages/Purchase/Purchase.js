import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
//import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/firebase-config';

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

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {

            fetch('http://localhost:5000/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    toast.success('Successfully Placed Order')
                }
            })
        reset()
    }

    const [num , setNum] = useState({ quantity: 0})
    const handleChange = (e) => {
        const {quantity, ...rest} = num;
        const newQuantity = e.target.value;
        const newNum = {newQuantity, ...rest};
        setNum(newNum);
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input {...register("name")} type="text" name='name' value={user?.displayName} class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input {...register("email")} type="text" name='email' value={user?.email} class="input input-bordered" />
                            
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Mobile No</span>
                            </label>
                            <input {...register("mobile", { required: true })} type="text" name='mobile' placeholder="Enter Mobile Number" class="input input-bordered" />
                            {errors.mobile?.type === 'required' && "Mobile is required"}
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Quantity</span>
                            </label>
                            <input {...register("quantity", { min: minimumOrder, max: available })} type="number" value={num.quantity}  onChange={handleChange}  name='quantity' class="input input-bordered" />
                            {errors.quantity?.type === 'min' && <small className='text-red-500'>Minimum order quantity is {minimumOrder} pcs</small>}
                            {errors.quantity?.type === 'max' && <small className='text-red-500'>Maximum order quantity is {available} pcs</small>}
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <textarea {...register("address", { required: true })} name="address" className='input input-bordered' id="" cols="30" rows="10"></textarea>
                            {errors.address?.type === 'required' && "Address is required"}
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