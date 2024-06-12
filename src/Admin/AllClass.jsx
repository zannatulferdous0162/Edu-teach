import React from 'react';
import SetAllClass from '../hooks/SetAllClass';
import { Link } from 'react-router-dom';
import UseAxiosSecure from '../hooks/useAxiosSecure';

const AllClass = () => {
    const [allclass,refetch]=SetAllClass()
    
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
      <div className="overflow-x-auto">
          <table className="table">
              {/* head */}
              <thead>
                  <tr>
  
                    
                      <th>Title</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                      <th>Progress</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      allclass.map(feed => (
                          <tr>
  
                              <td>
                                  <div className="flex items-center gap-3">
                                      <div className="avatar">
                                          <div className="mask mask-squircle w-12 h-12">
                                              <img src={feed.image} alt="Avatar Tailwind CSS Component" />
                                          </div>
                                      </div>
                                      <div>
                                          <div className="font-bold">{feed.title}</div>
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  {feed.price}
  
  
                              </td>
                              <td>
                                  <p>Status: {feed.status}</p>
                              </td>
                              <td>
                                  {
                                      feed.status == 'Rejected' ? <></> : <>
                                          {
                                              feed.status == 'Accepted' ? <button className="btn btn-success" onClick={() => handelAccped(feed._id)}>Accepted</button> : <button className="btn btn-primary" onClick={() => handelAccped(feed._id)}>Accept</button>
                                          }
                                      </>
                                  }
                                  {
                                      feed.status == 'Accepted' ? <></> : <>
                                          {
                                              feed.status == 'Rejected' ? <button className="btn btn-error">Rejected</button> : <button className="btn btn-primary" onClick={() => handelReject(feed._id)}>Reject</button>
                                          }
                                      </>
                                  }
                              </td>
                              <td>
                                  <Link to={`/dashboard/progress/${feed._id}`}><button className="btn btn-primary">See Progress</button></Link>
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

export default AllClass;