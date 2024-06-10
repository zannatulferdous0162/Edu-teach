import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../provider/Provider';
import Loading from '../Components/Loading/Loading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext)
  if (user) {
    return children
  }
  if (loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    )
  }

  return (
    <Navigate to='/login' replace={true}></Navigate>
  )




};

export default PrivateRoute;