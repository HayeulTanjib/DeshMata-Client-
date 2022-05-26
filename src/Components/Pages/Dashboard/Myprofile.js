import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/firebase-config';

const Myprofile = () => {

    const [user] = useAuthState(auth);
    const [info, setInfo] = useState([]);
    const { phone, education, linkedin, location } = info;

    fetch(`https://dry-escarpment-82110.herokuapp.com/profileinfo/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setInfo(data);
        })


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        await axios.put(`https://dry-escarpment-82110.herokuapp.com/updateprofile/${user?.email}`, data)
            .then(res => {
                if ((res.data.modifiedCount > 0)) {
                    toast.success("Profile Updated Successfully");
                }
            })
        reset();
    }



    return (
        <div className='h-full mt-12'>
            <div class="flex flex-col  border-opacity-50 ">
                <div class="grid  card  rounded-box place-items-center">
                    <div class="grid  card rounded-box place-items-center">
                        <div class="card w-96 bg-violet-400 text-primary-content">
                            <div class="card-body text-center font-semibold">
                                <h2 class="text-2xl">{user.displayName}</h2>
                                <p>{user.email}</p>
                                <p>Education: {education}</p>
                                <p>Location: {location}</p>
                                <p>Phone: {phone}</p>
                                <p>Linkedin Profile: {linkedin}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider">Update Profile</div>

                {/* Form */}
                <div class="grid card rounded-box place-items-center">
                    <div class="card w-96  shadow-2xl bg-violet-300">
                        <div class="card-body">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Education</span>
                                    </label>
                                    <input {...register('education')} name="education" type="text" placeholder="Enter Education" class="input input-bordered" />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Location</span>
                                    </label>
                                    <input {...register('location')} name="location" type="text" placeholder="Enter Location" class="input input-bordered" />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Enter Phone Number</span>
                                    </label>
                                    <input {...register('phone')} name="phone" type="text" placeholder="Enter Phone Number" class="input input-bordered" />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Linkedin Profile</span>
                                    </label>
                                    <input {...register('linkedin')} name="linkedin" type="text" placeholder="Enter Linkdin Profile Link" class="input input-bordered" />
                                </div>


                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Update Profile</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Myprofile;