import React from 'react';
import UseAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const SetUser = () => {
    const[axiosSecure]=UseAxiosSecure()
    const {data:users=[],refetch}=useQuery({
     queryKey:['req'],
     queryFn:async ()=>{
         const res = await axiosSecure.get(`/user`)
             return res.data;
     }
    })
    return [users,refetch]
};

export default SetUser;