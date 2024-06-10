import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { authContext } from '../../provider/Provider';
import UseAxiosSecure from '../../hooks/useAxiosSecure';
import SetTeacher from '../../hooks/SetTeacher';
import SetAdmin from '../../hooks/SetAdmin';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ApplyTeacher = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {user}=useContext(authContext)
  const [axiosSecure]=UseAxiosSecure()
  const [isTeacher]=SetTeacher()
  const [isAdmin]=SetAdmin()
  const onSubmit = (data) => {
    const applicationData = {
      name: data.name,
      email: data.email,
      image: user?.photoURL,
      experience: data.experience,
      title: data.title,
      category: data.category,
      status:'pending'
    };
   axiosSecure.post('/apply',applicationData)
   .then(data=>{
    console.log(data.data),
    toast.success('success fully apply')
   })
    console.log(applicationData);
    // Handle form submission logic here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Apply for a Teaching Position</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className={`mt-1 block w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            value={user?.displayName}
            readOnly
            {...register('name', { required: 'Experience is required' })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            value={user?.email}
            readOnly
            {...register('email', { required: 'Experience is required' })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Experience</label>
          <select
            className={`mt-1 block w-full p-2 border ${errors.experience ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            {...register('experience', { required: 'Experience is required' })}
          >
            <option value="">Select experience level</option>
            <option value="beginner">Beginner</option>
            <option value="mid-level">Mid-level</option>
            <option value="experienced">Experienced</option>
          </select>
          {errors.experience && <span className="text-red-500">{errors.experience.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            className={`mt-1 block w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            {...register('title', { required: 'Title is required' })}
          />
          {errors.title && <span className="text-red-500">{errors.title.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            className={`mt-1 block w-full p-2 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            {...register('category', { required: 'Category is required' })}
          >
            <option value="">Select a category</option>
            <option value="web-development">Web Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="data-science">Data Science</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="cyber-security">Cyber Security</option>
          </select>
          {errors.category && <span className="text-red-500">{errors.category.message}</span>}
        </div>
     {
     isAdmin|| isTeacher?    <p
    
      className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
    >
      You Are A Author
    </p>:  <button
      type="submit"
      className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
    >
      Apply
    </button>
     }
      </form>
    </div>
  );
};

export default ApplyTeacher;
