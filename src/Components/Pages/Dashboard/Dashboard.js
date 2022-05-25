import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../Firebase/firebase-config';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)

    return (
        <div>            
            <div class="drawer drawer-mobile min-h-screen mt-6">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                <h1 className='text-5xl text-center'>Dashboard</h1>
                    <Outlet/>
                   
                </div>
                <div class="drawer-side">
                    <label for="dashboard-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        
                        <li><Link to={'/dashboard/myprofile'}>My Profile</Link></li>
                        <li><Link to={'/dashboard/myorders'}>My Orders</Link></li>
                        <li><Link to={'/dashboard/addreview'}>Add Review</Link></li>
                        {
                        admin && <>
                        <li><Link to={'/dashboard/manageallorders'}>Manage All Orders</Link></li>
                        <li><Link to={'/dashboard/addproduct'}>Add Products</Link></li>
                        <li><Link to={'/dashboard/makeadmin'}>Make Admin</Link></li>
                        <li><Link to={'/dashboard/manageproducts'}>Manage Products</Link></li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;