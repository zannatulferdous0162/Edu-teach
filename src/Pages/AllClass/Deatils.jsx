import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import axios from 'axios';
import { authContext } from '../../provider/Provider';
import GetPay from '../../hooks/GetPay';
import SetAdmin from '../../hooks/SetAdmin';
import SetTeacher from '../../hooks/SetTeacher';

const Deatils = () => {
    const coursedata=useLoaderData()
    const [isAdmin]=SetAdmin()
    const [isTeacher]=SetTeacher()
    const [payment]=GetPay()
    const {user}=useContext(authContext)
    const exit=payment?.filter(pay=>pay.ClassId===coursedata._id&&pay.email===user?.email)
    return (
        <div>
              <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={coursedata.image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{coursedata.title}!</h1>
      <p className="py-2">{coursedata.price}TK</p>
      <p className="py-2">{coursedata.description}</p>
      <p>Teacher Name</p>
      <p className="py-2">{coursedata.name}</p>
   {
    isAdmin||isTeacher?<h2 className='text-xl text-green-500'>You ar Author</h2>:<>
     {
       !exit.length>0?  <Link to={`/enroll/${coursedata._id}`}><button className='btn btn-primary'>Enroll Now</button></Link> :<h2 className='text-xl text-green-500'>Payment Success</h2>
    }
    </>
   }
    </div>
  </div>
</div>
        </div>
    );
};

export default Deatils;