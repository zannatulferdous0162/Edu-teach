import React from 'react';
import SetUser from '../hooks/SetUser';
import UseAxiosSecure from '../hooks/useAxiosSecure';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ManageUser = () => {
    const [users,refetch]=SetUser()
    const [axiosSecure]=UseAxiosSecure()
    const handelStatusChange=(ID)=>{
      axiosSecure.patch(`/user/${ID}`).then(data=>{
        console.log(data.data)
        toast.success('success')
        refetch()
      })
    }
    return (
      <div>
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
                <tr>

                   
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Make Admin</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    users?.filter(user=>user.role!=='teacher').map(user => (
                        <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user.email}


                            </td>
                            <td>
                                <p>Role: {user.role}</p>
                            </td>
                            <td>
                            {
                            user.role==='admin'?<button>Admin</button>:<button onClick={()=>handelStatusChange(user._id)} className='btn btn-primary'>Make Admin</button>
                          }
                            </td>
                        
                           
                        </tr>
                    ))
                }


            </tbody>

        </table>
    </div>
</div>
    );
};

export default ManageUser;