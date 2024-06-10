import React from 'react';
import SetAllClass from '../hooks/SetAllClass';
import { Link } from 'react-router-dom';
import UseAxiosSecure from '../hooks/useAxiosSecure';

const AllClass = () => {
    const [allclass]=SetAllClass()
    const [,refetch]=SetAllClass()
    console.log(allclass)
    const [axiosSecure]=UseAxiosSecure()
    const handelAccped=(ID)=>{
      axiosSecure.patch(`/statusChange/${ID}`,{
        status:'Accepted'
      })
      .then(data=>{
        console.log(data.data)
        refetch()
      })
    }
    const handelReject=(ID)=>{
      axiosSecure.patch(`/statusChange/${ID}`,{
        status:'Rejected'
      }) .then(data=>{
        console.log(data.data)
        refetch()
      })
    }
    return (
        <div>
        
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
                {
                    allclass.map(classes=>(
                        <div key={classes._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={classes.image} alt="Shoes" /></figure>
                        <div className="card-body">
                          <h2 className="card-title">{classes.title}</h2>
                          <p className='text-xl text-blue-500'>{classes.price}Tk</p>
                          <p>{classes.description}</p>
                          <p>Status: {classes.status}</p>
                          <div className="card-actions justify-end">
                         {
                            classes.status=='Rejected'?<></>:<>
                               {
                               classes.status=='Accepted'?<button  className="btn btn-success" onClick={()=>handelAccped(classes._id)}>Accepted</button>:<button  className="btn btn-primary" onClick={()=>handelAccped(classes._id)}>Accept</button>
                            }
                            </>
                         }
                               {
                            classes.status=='Accepted'?<></>:<>
                               {
                               classes.status=='Rejected'?<button  className="btn btn-error">Rejected</button>:<button  className="btn btn-primary" onClick={()=>handelReject(classes._id)}>Reject</button>
                            }
                            </>
                         }
                             <Link to={`/dashboard/progress/${classes._id}`}><button className="btn btn-primary">See Progress</button></Link>
                          </div>
                        </div>
                      </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllClass;