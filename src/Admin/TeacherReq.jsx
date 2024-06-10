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
            
            <div className='grid lg:grid-cols-3 grid-cols-1'>
                {
                    techreq.map(req=>(
                        <div key={req._id} className="card bg-base-100 shadow-xl">
                        <figure><img className='h-[200px]' src={req.image} alt="" /></figure>
                        <div className="card-body">
                          <p className='text-xl text-blue-500'>{req.name}</p>
                          <h2 className="card-title">{req.title}</h2>
                          <p>{req.experience}</p>
                          <p>Email: {req.email}</p>
                          <p>Status: {req.status}</p>
                          <div className="card-actions justify-end">
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
                        
                          </div>
                        </div>
                      </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TeacherReq;