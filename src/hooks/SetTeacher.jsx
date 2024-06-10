import React, { useContext } from 'react';
import UseAxiosSecure from './useAxiosSecure';
import { useQuery } from "@tanstack/react-query";
import { authContext } from '../provider/Provider';


const SetTeacher = () => {
    const {user,loading}=useContext(authContext)
    const [axiosSecure]=UseAxiosSecure()
     const {data:isTeacher,isLoading: isTeacherLoading}=useQuery({
        queryKey:["isTeacher",user?.email],
        enabled: !loading,
        queryFn:async()=>{
            const res = await axiosSecure.get(`/user/teacher/${user?.email}`)
            return res.data.admin;
        }
     })
    return [isTeacher,isTeacherLoading]
};

export default SetTeacher;