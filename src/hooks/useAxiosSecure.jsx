import axios from 'axios';
import { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { authContext } from '../provider/Provider';


const axiosSecure = axios.create({
    baseURL: 'https://edu-teach-server.vercel.app', 
  });
  
const UseAxiosSecure = () => {
    const { logOut } = useContext(authContext); 
    const navigate = useNavigate(); 
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
          const token = localStorage.getItem('access-web-token');
          if (token) {
            config.headers.authorize = `Bearer ${token}`;
          }
          return config;
        });
    
        axiosSecure.interceptors.response.use(
          (response) => response,
          async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
              await logOut();
              window.location('/login');
            }
            return Promise.reject(error);
          }
        );
      }, [logOut, navigate]);
    
      return [axiosSecure];
};

export default UseAxiosSecure;