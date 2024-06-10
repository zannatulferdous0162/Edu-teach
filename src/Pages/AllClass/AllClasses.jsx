import React, { useState, useEffect } from 'react';

import UseAxiosSecure from '../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const AllClasses = () => {
    const [classes, setClasses] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
   const [axiosSecure]=UseAxiosSecure()
    useEffect(() => {
        fetchClasses();
    }, [page]);

    const fetchClasses = async () => {
        try {
            const response = await axiosSecure.get(`/classes?page=${page}&limit=${limit}`);
            setClasses(response.data.results);
            setTotalPages(response.data.totalPages);
            setLimit(response.data.limit);
        } catch (error) {
            console.error('Error fetching classes:', error);
        }
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <h1 className='text-2xl text-blue-500 text-center py-4'>Classes</h1>
            <ul className='grid lg:grid-cols-3 grid-cols-1 gap-3 my-4'>
                {classes?.filter(classItem=>classItem.status==='Accepted').map((classItem, index) => (
                        <div key={classItem._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={classItem.image} alt="Shoes" /></figure>
                        <div className="card-body">
                          <h2 className="card-title">{classItem.title}</h2>
                          <p className='text-xl text-blue-500'>{classItem.price}Tk</p>
                          <p>{classItem.description}</p>
                          <p>Teacher Name: {classItem.name}</p>
                          <div className="card-actions justify-end">
                             <Link to={`/details/${classItem._id}`}><button className="btn btn-primary">See Details</button></Link>
                          </div>
                        </div>
                      </div>
                ))}
            </ul>
           <div className='my-3 text-center'>
           <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
           </div>
        </div>
    );
};

const Pagination = ({ page, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (page > 1) onPageChange(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages) onPageChange(page + 1);
    };

    return (
        <div>
            <button className='btn btn-primary' onClick={handlePrevious} disabled={page === 1}>Previous</button>
            <span> Page {page} of {totalPages} </span>
            <button  className='btn btn-primary' onClick={handleNext} disabled={page === totalPages}>Next</button>
        </div>
    );
};

export default AllClasses;
