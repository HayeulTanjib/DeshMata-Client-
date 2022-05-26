import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {

    const { data: allusers, isLoading, refetch } = useQuery('allusers', () => fetch('http://localhost:5000/allusers', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if(isLoading){
        return <Loading/>
    }

    return (
        <div className='mt-8'>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Make Admin</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allusers.map((user, index) => <MakeAdminRow user={user} index={index} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;