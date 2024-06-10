import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import SetAssigment from '../hooks/SetAssigment';
import UseAxiosSecure from '../hooks/useAxiosSecure';
import { authContext } from '../provider/Provider';
import FeedbackForm from './FeedBack';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Continue = () => {
    // const data = useLoaderData()
    const {user}=useContext(authContext)
    console.log(data)
    const [assigmen]=SetAssigment()
    const [axiosSecure]=UseAxiosSecure()
    const assigmentSubmit=assigmen?.filter(assig=>assig.classId===data._id)
    console.log(assigmentSubmit)
    const handelSubmit=(ID)=>{
        const datas={
            email:user?.email,
            title:assigmentSubmit[0]?.title,
            deadline:assigmentSubmit[0]?.deadline,
            classId:data._id

        }
     axiosSecure.patch(`/submitassigment/${ID}`,datas)
     .then(data=>{
        console.log(data.data)
        toast.success('success')
     })
    }
    return (
        <div className='text-xl flex lg:flex-row items-center gap-5'>
        <div>
             <h1>Assignment Details</h1>
             <img src={data.image} alt="" />
            <h2>Title: {assigmentSubmit[0]?.title}</h2>
            <p><strong>Deadline: {assigmentSubmit[0]?.deadline}</strong></p>
            <p><strong>Description: {assigmentSubmit[0]?.description}</strong></p>
            <button  onClick={()=>handelSubmit(assigmentSubmit[0]?._id)} className='my-4 btn btn-primary'>Submit Assigment</button>
        </div>
          <div>
          <FeedbackForm classes={data} user={user}></FeedbackForm>
          </div>
        </div>
    );
};

export default Continue;