import React from 'react';
import { useForm } from 'react-hook-form';
import { parsePath, useLoaderData } from 'react-router-dom';
import UseAxiosSecure from '../hooks/useAxiosSecure';
import SetAssigment from '../hooks/SetAssigment';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Deitals = () => {
    const coursedata=useLoaderData()
    const [axiosSecure]=UseAxiosSecure()
    const [assigment,refetch]=SetAssigment()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      const assignmentData = {
        title: data.title,
        deadline: data.deadline,
        description: data.description,
        classId:coursedata._id
      };

      axiosSecure.post('/assigment',assignmentData)
      .then(data=>{
        console.log(data.data)
        toast.success('success')
        refetch()
      })
      console.log(assignmentData);
      // Handle form submission logic here
    };
    const exit=assigment?.filter(ex=>ex.classId===coursedata._id)
     
    // const exit2 =  assigment?.submissions[0]?.filter(ex => ex.classId === coursedata._id);
    console.log(exit)
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={coursedata.image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{coursedata.title}!</h1>
      <p className="py-2">{coursedata.price} TK</p>
      <p className="py-2">{coursedata.description}</p>
      <p>Author</p>
      <p className="py-2">{coursedata.name}</p>
      <p className="py-1">{coursedata.email}</p>
      {
      <p className='text-xl'>Assigment Submit: {exit[0]?.submissions?.length}</p>
    }
    {
      exit.length==0?  <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_2').showModal()}>Create Assigment</button>:<p className='py-2 assigmen text-2xl text-green-400'>Created Assigment</p>
    }

      <dialog id="my_modal_2" className="modal">
  <div className="modal-box">
  <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add a New Assignment</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">Assignment Title</label>
          <input
            type="text"
            className={`mt-1 block w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            {...register('title', { required: 'Title is required' })}
          />
          {errors.title && <span className="text-red-500">{errors.title.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Assignment Deadline</label>
          <input
            type="date"
            className={`mt-1 block w-full p-2 border ${errors.deadline ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            {...register('deadline', { required: 'Deadline is required' })}
          />
          {errors.deadline && <span className="text-red-500">{errors.deadline.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Assignment Description</label>
          <textarea
            className={`mt-1 block w-full p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            {...register('description', { required: 'Description is required' })}
          ></textarea>
          {errors.description && <span className="text-red-500">{errors.description.message}</span>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Add Assignment
        </button>
      </form>
    </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  </div>
</div>
        </div>
    );
};

export default Deitals;