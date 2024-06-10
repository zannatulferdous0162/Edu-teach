import React, { useContext } from 'react';
import UseAxiosSecure from './useAxiosSecure';
import { authContext } from '../provider/Provider';
import { useQuery } from '@tanstack/react-query';

const MyClass = () => {
    const [axiosSecure]=UseAxiosSecure()
    const {user,loading}=useContext(authContext)
    const {data:classes=[],refetch}=useQuery({
        queryKey:['myClass',user?.email],
        enabled: !loading,

        queryFn: async()=>{
            const res = await axiosSecure.get(`/myclass?email=${user?.email}`)
            return res.data;
          }
    })
    return [classes,refetch]
};

export default MyClass;