import React from 'react';
import MyClass from '../hooks/MyClass';
import Swal from 'sweetalert2'
import UseAxiosSecure from '../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
const Classes = () => {
    const [classes,refetch]=MyClass()
     const [axiosSecure]=UseAxiosSecure()
    const handelDelete=(ID)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              axiosSecure.delete(`/class/${ID}`)
              .then(data=>{
                console.log(data.data)
                refetch()
              })
              
              console.log(ID)
            }
          });
    }

    return (
        <div>
            <h2 className='py-4 text-3xl text-center'>My <span className='text-blue-500 font-semibold'>Classes</span></h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 items-center'>
              {
                classes.map(data=>(
                    <div key={data._id} className="card bg-base-100 shadow-xl">
                    <figure><img src={data.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{data.title}</h2>
                      <p className='text-xl text-blue-500'>{data.price}Tk</p>
                      <p>{data.description}</p>
                      <p>Status: {data.status}</p>
                      <div className="card-actions justify-end">
<Link to={`/dashboard/update/${data._id}`}><button  className="btn btn-primary">Update Course</button></Link>
                        <button onClick={()=>handelDelete(data._id)} className="btn btn-error">Delete</button>
<Link to={`/dashboard/myclass/${data._id}`}>                        <button className="btn btn-primary">See Details</button></Link>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
    );
};

export default Classes;