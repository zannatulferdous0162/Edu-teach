import React from 'react';
import { Link } from 'react-router-dom';
import SetAdmin from '../../hooks/SetAdmin';
import SetTeacher from '../../hooks/SetTeacher';

const ApplyTech = () => {
  const  [isAdmin] =SetAdmin();
    const  [isTeacher] =SetTeacher();
    return (
        <div className='mt-9'>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row gap-4 justify-center">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSieOdvANrPo0Z-vdDJYqYjIrSX6HEO-zQbiA&s" className='h-[400px]' />
    <div>
      <h1 className="text-5xl font-bold">Become A Instructor!</h1>
      <p className="py-6">You can apply by providing us your skills and if we think you are suitable then we will select you.</p>
     {
      isAdmin?<button>You Are Admin</button>:<>
      {
      isTeacher?<Link to='/dashboard/teacher-profile'> <button className="btn btn-primary">Start Teaching Today</button></Link>:<Link to='/apply-teacher'><button className="btn btn-primary">Start Teaching Today</button></Link>
     }
      </>
     }
    </div>
  </div>
</div>
        </div>
    );
};

export default ApplyTech;