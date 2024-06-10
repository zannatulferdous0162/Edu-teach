import React from 'react';
import UseAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const GetPay = () => {
    const[axiosSecure]=UseAxiosSecure()
    const {data:payment=[],refetch}=useQuery({
     queryKey:['pay'],
     queryFn:async ()=>{
         const res = await axiosSecure.get(`/payment`)
             return res.data;
     }
    })
    return [payment,refetch]
};

export default GetPay;