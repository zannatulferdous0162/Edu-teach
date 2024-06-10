import React from 'react';
import SetTotal from '../../hooks/SetTotal';

const Total = () => {
  const [total]=SetTotal()
    return (
        <div className='mt-10'>
          

<div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse gap-6 ">
    <img src="https://school-management-1203a.web.app/assets/school_kids-e2c7700f.jpg" className='h-[400px] lg:w-[100%] w-[250px]' />
    <div>
      <h1 className="text-5xl font-bold py-5">About <span className='text-blue-500'>Total</span> !</h1>
      <div className="stats shadow">
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Users</div>
    <div className="stat-value">{total.users}</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Cclasses</div>
    <div className="stat-value text-secondary">{total.total}</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Enrollment</div>
    <div className="stat-value">{total.enroll}</div>
  </div>
  
</div>

    </div>
  </div>
</div>

        </div>
    );
};

export default Total;