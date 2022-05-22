import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase-config';

const Header = () => {

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    const headerItems = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/purchase'}>Purchase</Link></li>
        <li><Link to={'/blogs'}>Blogs</Link></li>
        {
            user ? <>
                <li><Link to={'/dashboard'}>Dashboard</Link></li>
                <li><button onClick={handleSignOut} >Logout</button></li>
            </>
                :
                <li><Link to={'/login'}>Login</Link></li>
        }
    </>

    return (
        <div>
            <div class="navbar bg-secondary text-white">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
                            {headerItems}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">DeshMata</a>
                </div>
                <div class="navbar-center  hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {headerItems}
                    </ul>
                </div>
                <div class="navbar-end mr-12">
                    {user && <>Hello {user?.displayName} !</>}
                </div>
            </div>
        </div>
    );
};

export default Header;