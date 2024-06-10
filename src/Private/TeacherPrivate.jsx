import React, { useContext } from 'react';


import { Navigate } from 'react-router-dom';


import SetTeacher from '../hooks/SetTeacher';
import { authContext } from '../provider/Provider';
import Loading from '../Components/Loading/Loading';

const TeacherPrivate = ({children}) => {
   //  const [isTeacher,isTeacherLoading]=SetTeacher()
    const { user, loading } = useContext(authContext);
    if (loading||isTeacherLoading) {
        return <>
       <Loading></Loading>
        </>
    }
     if (user&&isTeacher) {
        return children
     }
     if (user&&!isTeacher) {
        return <Navigate to="/" replace={true}></Navigate>
     }
};

export default TeacherPrivate;