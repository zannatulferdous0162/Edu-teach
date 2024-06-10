import React from 'react';
import UseAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const SetAllClass = () => {
   const[axiosSecure]=UseAxiosSecure()
   const {data:allclass=[],refetch}=useQuery({
    queryKey:['allclass'],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/class`)
            return res.data;
    }
   })
   return [allclass,refetch]
};

export default SetAllClass;