import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../../Firebase/firebase-config';
import Loading from '../../Shared/Loading';


const Purchase = () => {

const {id} = useParams();
const [user] = useAuthState(auth);

const {data: product, isLoading} = useQuery('product', () => fetch(`http://localhost:5000/purchase/${id}`).then(res => res.json()) )

const{name, price} = product; 
const{displayName } = user;


const { register, formState: { errors }, handleSubmit, reset } = useForm();
const onSubmit = (data) => {
    console.log(data);
    reset()
}


if(isLoading){
    return <Loading/>
}


    return (
        <div>
            <div className="text-2xl text-center">Purchase: {id}</div>
<div class="hero min-h-screen bg-base-200">
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
          
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
            <label class="label">
                <span class="label-text">Tools Name</span>
            </label>
            <input {...register("name")} name='name' type="text" value={name}  class="input input-bordered" />
            </div>

            <div class="form-control">
            <label class="label">
                <span class="label-text">Price</span>
            </label>
            <input {...register("price")} name="price" type="text" value={`${price}$`} class="input input-bordered" />
            </div>

            <div class="form-control">
            <label class="label">
                <span class="label-text">Order Quantity</span>
            </label>
            <input type="text" value={displayName} class="input input-bordered" />
            </div>

            <div class="form-control mt-6">
            <button class="btn btn-primary">Purchase Now</button>
            </div>

         </form>
    </div>
    </div>
  </div>
</div>
    );
};

export default Purchase;