import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();

    const imageStorageApiKey = 'd2c2767c13cc2f3a89455fa81902bd33';

    const onSubmit = async(data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageApiKey}`;

        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const product = {
                    name: data.productname,
                    img:img,
                    description: data.description,
                    minimumOrder: parseInt(data.minimumorder),
                    available:parseInt(data.available),
                    price: parseInt(data.price)
                }

                fetch('http://localhost:5000/addproduct',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body:JSON.stringify(product)
                })
                .then(res => res.json())
                .then(inserted => {
                    if(inserted.insertedId){
                        toast.success("Product Added Successfully")
                    }
                })
            }
        })
        reset();
    }


    return (
        <div>

            {/* Form */}
            <div class="grid card rounded-box place-items-center">        
                            <div class="card w-96  shadow-2xl bg-lime-400">
                                <div class="card-body">

                        <form  onSubmit={handleSubmit(onSubmit)}>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Product Name</span>
                                        </label>
                                        <input {...register('productname')} name="productname" type="text" class="input input-bordered" />
                                    </div>

                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Price</span>
                                        </label>
                                        <input {...register('price')} name="price" type="text" class="input input-bordered" />
                                    </div>

                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Description</span>
                                        </label>
                                        <textarea {...register('description')} name="description"  type="text" class="input input-bordered" id="" cols="30" rows="10"></textarea>
                                    </div>

                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Minimum Order</span>
                                        </label>
                                        <input {...register('minimumorder')} name="minimumorder" type="text"  class="input input-bordered" />
                                    </div>

                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Availabe Product</span>
                                        </label>
                                        <input {...register('available')} name="available" type="text"  class="input input-bordered" />
                                    </div>

                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Product Image</span>
                                        </label>
                                        <input {...register('image')} name="image" type="file"  class="input input-bordered" />
                                    </div>


                                    <div class="form-control mt-6">
                                        <button class="btn btn-secondary">Add Product</button>
                                    </div>

                                    </form>
                                </div>
                            </div>
                    </div>
        </div>
    );
};

export default AddProduct;