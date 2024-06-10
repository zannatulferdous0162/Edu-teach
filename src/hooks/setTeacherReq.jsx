import React from 'react';
import UseAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const setTeacherReq = () => {
    const[axiosSecure]=UseAxiosSecure()
   const {data:techreq=[],refetch}=useQuery({
    queryKey:['req'],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/apply`)
            return res.data;
    }
   })
   return [techreq,refetch]
};

export default setTeacherReq;