import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase-config';
import Loading from './Loading';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, gooleLoading, googleError] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";

    if(gooleLoading){
        <Loading/>
    }

    if(googleUser){
        navigate(from, { replace: true });
    }

    return (
    <div className="mt-16 grid space-y-4">
        {googleError && <small className='text-center text-red-500'>{googleError.message}</small>}
        <button onClick={() => signInWithGoogle()} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 first-letter: hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
            <div className="relative flex items-center space-x-4 justify-center">
                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                <span className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
            </div>
        </button>
    </div>
        
    );
};

export default SocialLogin;