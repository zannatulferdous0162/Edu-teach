import React from 'react';
import setTeacherReq from '../hooks/setTeacherReq';
import UseAxiosSecure from '../hooks/useAxiosSecure';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TeacherReq = () => {
    const [techreq,refetch]=setTeacherReq()
    const [axiosSecure]=UseAxiosSecure()
    console.log(techreq)
    const handelAccped=(ID,email)=>{
       axiosSecure.patch(`/changeStatusTeacger/${ID}`,{
        status:"Accpted"
       })
       .then(data=>{
        console.log(data.data)
        toast.success('success')
        refetch()
        axiosSecure.patch(`/teacherRole/${email}`)
        .then(data=>{
            console.log(data.data)
        })
       })
    }
    const handelReject=(ID)=>{
       axiosSecure.patch(`/changeStatusTeacger/${ID}`,{
        status:"Rejected"
       })
       .then(data=>{
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
                        <th>Title</th>
                        <th>Experience</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        techreq.map(req => (
                            <tr>
    
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={req.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{req.name}</div>
                                        </div>
                                    </div>
                                </td>
                                 <td>
                                 <p>Role: {req.title}</p>
                                 </td>
                                 <td>
                                 <p>Role: {req.experience}</p>
                                 </td>
                                <td>
                                    <p>Role: {req.email}</p>
                                </td>
                                <td>
                                    {req.status}
    
    
                                </td>
                                
                                <td>
                                {
                                req.status=='Rejected'?<></>:<>
                                   {
                                   req.status=='Accpted'?<button  className="btn btn-success" onClick={()=>handelAccped(req._id)}>Accepted</button>:<button  className="btn btn-primary" onClick={()=>handelAccped(req._id,req.email)}>Accept</button>
                                }
                                </>
                             }
                                   {
                                req.status=='Accpted'?<></>:<>
                                   {
                                   req.status=='Rejected'?<button  className="btn btn-error">Rejected</button>:<button  className="btn btn-primary" onClick={()=>handelReject(req._id)}>Reject</button>
                                }
                                </>
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

export default TeacherReq;