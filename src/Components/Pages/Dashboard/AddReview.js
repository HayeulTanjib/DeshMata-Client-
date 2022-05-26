import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/firebase-config';

const AddReview = () => {

    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {

        console.log(data);

        await axios.post('http://localhost:5000/addreview', data)
            .then(res => {
                if ((res.data.insertedId)) {
                    toast.success("Review Added Successfully");
                }
            })
        reset();
    }


    return (
        <div>

            {/* Form */}
            <div class="grid card rounded-box place-items-center mt-12">
                <div class="card w-96  shadow-2xl bg-yellow-300">
                    <div class="card-body">

                        <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control">
                                <label class="label">
                                    <span class="label-text">User Name</span>
                                </label>
                                <input {...register('name', { required: true })} name="name" value={user?.displayName} type="text"  class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Rating</span>
                                </label>
                                <input {...register('rating', { required: true })} name="rating" type="text" placeholder="Enter Rating: 1-5" class="input input-bordered" />
                                {errors.rating?.type === 'required' && <small className='text-red-500'>Rating  is required</small>}
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Review Description</span>
                                </label>
                                <textarea {...register('description', { required: true })} placeholder="Write Review..." name="description" id="" class="input input-bordered" cols="30" rows="10"></textarea>
                                {errors.description?.type === 'required' && <small className='text-red-500'>Description  is required</small>}
                            </div>

                            <div class="form-control mt-6">
                                <button class="btn btn-success">Add Review</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddReview;