import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({user, index, refetch}) => {

    const makeAdmin = () => {
        fetch(`http://localhost:5000/admin/${user?.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to made and Admin')
                }
                return res.json()
            })
            .then(data => {
                if(data.result.modifiedCount > 0){
                    refetch()
                    toast.success('Successfully made an Admin')
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user?.email}</td>
            <td>{user?.role !== 'admin' ? <button onClick={makeAdmin} className='btn btn-sm'>Admin</button> : <b>Admin</b>}</td>
        </tr>
    );
};

export default MakeAdminRow;