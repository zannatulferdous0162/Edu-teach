import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { authContext } from '../provider/Provider';
import UseAxiosSecure from '../hooks/useAxiosSecure';
import MyClass from '../hooks/MyClass';
import { useLoaderData } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateClass = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [axiosSecure]=UseAxiosSecure()
  const [,refetch]=MyClass()
const {user}=useContext(authContext)
  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
    const classdata={
        title:data.title,
        name:data.name,
        email:data.email,
        price:parseFloat(data.price),
        description:data.description,
        image:data.image,
    }
    console.log(classdata)
    axiosSecure.patch(`/class/${updateData._id}`,classdata)
    .then(data=>{
        console.log(data.data)
        toast.success('success')
        refetch()
    })
  };

  const updateData=useLoaderData()
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add a New Class</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            defaultValue={updateData.title}
            className={`mt-1 block w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            {...register('title', {required: true})}
          />
          {errors.title && <span className="text-red-500">{errors.title.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            value={user?.displayName}
            {...register('name', {required: true})}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            value={user?.email}
            {...register('email', {required: true})}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            defaultValue={updateData.price}
            className={`mt-1 block w-full p-2 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            {...register('price', {required: true})}
          />
          {errors.price && <span className="text-red-500">{errors.price.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
          defaultValue={updateData.description}
            className={`mt-1 block w-full p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            {...register('description', {required: true})}
          ></textarea>
          {errors.description && <span className="text-red-500">{errors.description.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
          defaultValue={updateData.image}
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            placeholder='image'
            {...register('image',{required: true})}
          />
          {errors.image && <span className="text-red-500">{errors.image.message}</span>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Update Class
        </button>
      </form>
    </div>
  );
};

export default UpdateClass;
