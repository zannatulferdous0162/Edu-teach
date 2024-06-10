import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SetRating from '../hooks/SetRating';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const SeeProgress = () => {
    const data=useLoaderData()
    const[feedback]=SetRating()
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>FeedBack Text</th>
        <th>Rating</th>
        <th>Class Name</th>
      </tr>
    </thead>
    <tbody>
      {
    feedback?.filter(feed=>feed.classId===data._id).map(feed=>(
        <tr>
      
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={feed.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{feed.name}</div>
            </div>
          </div>
        </td>
        <td>
          {feed.feedback}
          
          
        </td>
        <td>
        <Rating
      style={{ maxWidth: 130 }}
      value={feed.rating}
      
      readOnly
    />
        </td>
        <th>
        <td>{feed.title}</td>
        </th>
      </tr>
    ))
      }

    
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default SeeProgress;