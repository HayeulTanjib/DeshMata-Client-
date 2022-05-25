import React from 'react';
import useTools from '../../Hooks/useTools';
import Loading from '../../Shared/Loading';
import AllProductsRow from './AllProductsRow';


const AllProducts = () => {

    //All Tools Custom Hook
    const [tools, isLoading] = useTools();

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <h1 className='text-5xl text-center py-12'>Our Tools</h1>
            <div class="card bg-base-100 shadow-xl grid grid-cols-1 lg:grid-cols-3  px-12 gap-4 mx-auto">
            {
                tools.slice(1).reverse().map(tool => <AllProductsRow tool={tool}/>)
            }
            </div>
        </div>
    );
};

export default AllProducts;