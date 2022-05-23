import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;