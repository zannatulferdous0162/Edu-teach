import React from 'react';

import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from './useAxiosSecure';

const SetRating = () => {
    const[axiosSecure]=UseAxiosSecure()
    const {data:feedback=[],refetch}=useQuery({
     queryKey:['req'],
     queryFn:async ()=>{
         const res = await axiosSecure.get(`/feedback`)
             return res.data;
     }
    })
    return [feedback,refetch]
};

export default SetRating;