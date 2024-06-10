import React, { useContext } from 'react';


import { Navigate } from 'react-router-dom';
import { authContext } from '../provider/Provider';
import SetAdmin from '../hooks/SetAdmin';
import Loading from '../Components/Loading/Loading';

const AdminPrivate = ({children}) => {
   //  const [isAdmin,isAdminLoading]=SetAdmin()
    const { user, loading } = useContext(authContext);
    if (loading||isAdminLoading) {
        return <>
       <Loading></Loading>
        </>
    }
     if (user&&isAdmin) {
        return children
     }
     if (user&&!isAdmin) {
        return <Navigate to="/" replace={true}></Navigate>
     }
};

export default AdminPrivate;