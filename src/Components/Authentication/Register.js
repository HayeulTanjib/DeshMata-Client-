import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bgImg from '../../Assets/bg.jpg';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase-config';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import SocialLogin from '../Shared/SocialLogin';



const Register = () => {

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async(data) => {
        const {name, email, password} = data;
       await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        reset()
    }

    if(loading){
         <Loading/>
    }

    if(user){
        navigate('/');
    }


    return (
        <div>
            <div className="bg-white dark:bg-gray-900">
                <div className="flex justify-center h-screen">
                    <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: `url(${bgImg})` }} >

                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h2 className="text-4xl font-bold text-white">DeshMata</h2>
                                <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div className="flex-1">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Sign Up</h2>
                            </div>

                            {/* Form */}
                            <div className="mt-8">
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div>
                                        <label for="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Name</label>
                                        <input {...register("name", { required: true })} type="name" name="name" placeholder="John Doe" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        <small className='text-red-500'>{errors.name?.type === 'required' && "Name is required"}</small>
                                    </div>

                                    <div className="mt-6">
                                        <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                        <input {...register("email", { required: true })} type="email" name="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        <small className="text-red-500">{errors.email?.type === 'required' && "Email is required"}</small>
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex justify-between mb-2">
                                            <label for="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                        </div>
                                        <input {...register("password", { required: true, minLength: 6 })} type="password" name="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        <small className="text-red-500">{errors.password?.type === 'required' && "Password is required"}</small>
                                        <small className="text-red-500">{errors.password?.type === 'minLength' && "Password length must be 6 or longer"}</small>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                                {error && <small className='text-center text-red-500'>{error.message}</small>}

                                {/* Google Login */}
                                <SocialLogin/>

                                <p className="mt-6 text-sm text-center text-gray-400">Already have an account?
                                    <Link to={'/login'} className="text-blue-500 focus:outline-none focus:underline hover:underline"> Log In</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;