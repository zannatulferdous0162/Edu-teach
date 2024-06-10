import React from 'react';
import loading from '../../assets/banner/smartphone.gif';
import { Link } from 'react-router-dom';
const Loading = () => {
    return (
        <div className='flex flex-col items-center py-[150px]'>
           <img className='h-[200px]' src={loading} alt="" />
       <Link to='/login'>    <button className='btn btn-primary'>Login Please <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</button></Link>
        </div>
    );
};

export default Loading;