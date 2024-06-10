import React from 'react';
import UseAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const SetAssigment = () => {
    const [axiosSecure]=UseAxiosSecure()

    const {data:assigment=[],refetch}=useQuery({
        queryKey:['assigment'],

        queryFn: async()=>{
            const res = await axiosSecure.get(`/assigment`)
            return res.data;
          }
    })
    return [assigment,refetch]
};

export default SetAssigment;