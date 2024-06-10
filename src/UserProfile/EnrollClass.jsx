import React, { useContext } from 'react';
import SetAllClass from '../hooks/SetAllClass';
import GetPay from '../hooks/GetPay';
import { Link } from 'react-router-dom';
import { authContext } from '../provider/Provider';

const EnrollClass = () => {
    
    
    const [payment]=GetPay()
    const {user}=useContext(authContext)
    
    return (
        <div>
            
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
            {payment?.filter(pay=>pay.email===user?.email).map((classItem, index) => (
                        <div key={classItem._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={classItem.image} alt="Shoes" /></figure>
                        <div className="card-body">
                          <h2 className="card-title">{classItem.title}</h2>
                          <p className='text-xl text-blue-500'>{classItem.price}Tk</p>
                          <p>{classItem.description}</p>
                          <p>Teacher Name: {classItem.name}</p>
                          <div className="card-actions justify-end">
                             <Link to={`/profile/continue/${classItem.ClassId}`}><button className="btn btn-primary">Continue</button></Link>
                          </div>
                        </div>
                      </div>
                ))}
            </div>
        </div>
    );
};

export default EnrollClass;