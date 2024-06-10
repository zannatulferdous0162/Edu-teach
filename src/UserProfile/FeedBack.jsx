import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import UseAxiosSecure from '../hooks/useAxiosSecure';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Rating component
const Rating = ({ value, onChange, style }) => (
  <div className={style}>
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        style={{ maxWidth: 180 }}
        className={`cursor-pointer ${i < value ? 'text-yellow-500' : 'text-gray-300'}`}
        onClick={() => onChange(i + 1)}
      >
        ★
      </span>
    ))}
  </div>
);

function FeedbackForm({classes,user}) {
  const { handleSubmit, control, register } = useForm();
  const [axiosSecure]=UseAxiosSecure()
  const onSubmit = data => {
    const feedBackData={
        feedback:data.feedback,
        name:data.name,
        title:data.title,
        rating:data.rating,
        classId:classes._id,
        image:user?.photoURL
    }
    console.log(feedBackData)
    axiosSecure.post('/feedback',feedBackData)
    .then(data=>{
        console.log(data.data)
        toast.success('success')
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4 border rounded-lg shadow-md space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Feedback:</label>
        <textarea
          {...register('feedback', { required: true })}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          {...register('name', { required: true })}
          defaultValue={user?.displayName}
          readOnly
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Class Title:</label>
        <input
          {...register('title', { required: true })}
          defaultValue={classes.title}
          readOnly
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Rating:</label>
        <Controller
          name="rating"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <Rating
              style="flex space-x-1"
              value={field.value}
              onChange={field.onChange}
            />
          )}
          rules={{ required: true }}
        />
      </div>

      <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg">
        Submit
      </button>
    </form>
  );
}

export default FeedbackForm;
