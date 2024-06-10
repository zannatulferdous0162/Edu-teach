import React from 'react';
import UseAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const SetTotal = () => {
    const [axiosSecure]=UseAxiosSecure()
    const {data:total={},refetch}=useQuery({
        queryKey:['total'],
        queryFn:async ()=>{
            const res = await axiosSecure.get(`/count`)
                return res.data;
        }
       })
       return [total,refetch]
};

export default SetTotal;