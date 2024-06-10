import React from 'react';
import SetUser from '../hooks/SetUser';
import UseAxiosSecure from '../hooks/useAxiosSecure';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ManageUser = () => {
    const [users,refetch]=SetUser()
    // const [axiosSecure]=UseAxiosSecure()
    const handelStatusChange=(ID)=>{
      axiosSecure.patch(`/user/${ID}`).then(data=>{
        console.log(data.data)
        toast.success('success')
        refetch()
      })
    }
    return (
        <div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
                {
                    users?.filter(user=>user.role!=='teacher').map(user=>(
                        <div key={user._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={user.image} alt={user.name} /></figure>
                        <div className="card-body">
                          <h2 className="card-title">{user.name}</h2>
                          <p>{user.email}</p>
                          <p>Role: {user.role}</p>
                          <div className="card-actions justify-end">
                          {
                            user.role==='admin'?<button>Admin</button>:<button onClick={()=>handelStatusChange(user._id)} className='btn btn-primary'>Make Admin</button>
                          }
                          </div>
                        </div>
                      </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageUser;