import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { authContext } from '../../provider/Provider';
import UseAxiosSecure from '../../hooks/useAxiosSecure';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Login = () => {
    const {loginUser,googleLogin}=useContext(authContext)
    const [axiosSecure]=UseAxiosSecure()
    const navigate=useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    loginUser(data.email, data.password)
    .then((userCredential)=>{
       const user = userCredential.user;
       console.log(user)
       navigate('/')
       toast.success('login success')
    })
    .catch(error=>{console.log(error),toast.error(error.message)})

  };
  const handelGoogle=()=>{
    googleLogin()
        .then((result)=>{
            const user = result.user;
            console.log(user)
            toast.success('login success')
            navigate('/')
            const saveUser = { name: user.displayName, email: user.email,image:user.photoURL ,role:'user'}
  
            axios.post('https://edu-teach-server.vercel.app/user',saveUser)
            .then((data)=>{
              console.log(data.data);
            
            })
        })
 }
  console.log(errors);
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPwKZsqArADQH80YlaQMxiqAVowGF5GhL_gdu35OHEYW91mrnX6WKKSMpf30nROhp5oI&usqp=CAU" className="h-[50px]" alt="Logo" />
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                                <button onClick={handelGoogle}
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                                >
                                    <div className="bg-white p-2 rounded-full">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4"
                                            />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853"
                                            />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04"
                                            />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-4">Sign In with Google</span>
                                </button>
                            </div>

                            <div className="my-12 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or Login with Cartesian E-mail
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                               <form onSubmit={handleSubmit(onSubmit)}>
                               <input {...register("email", {required: true})}
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email"
                                    placeholder="Email"
                                />
                                <input {...register("password", {required: true})}
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password"
                                    placeholder="Password"
                                />
                                <button
                                    className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <svg
                                        className="w-6 h-6 -ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-2">Login</span>
                                </button>
                               </form>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    <Link to="/register" className="text-xl border-b border-gray-500 border-dotted">
                                        Register Now
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-green-100 text-center hidden lg:flex">
                    <div
                        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('https://i.ibb.co/XJzqGDD/background.png')" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
