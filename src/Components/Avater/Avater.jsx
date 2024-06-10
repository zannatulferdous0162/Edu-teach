import React, { useState } from 'react';
import avatarImage from '../../assets/banner/img1-c25b1879.png';
import { Link } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AvatarDropdown = ({user,logout}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const handelLogOut=()=>{
    logout().then(() => {
      toast.success('logout')
    }).catch((err) => {
         console.log(err)
    });
  }

  return (
    <div className="relative inline-block text-left z-10">
      <div>
        <button
          type="button"
          className="flex items-center focus:outline-none"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          <img
            className="w-[50px]  rounded-full"
            src={user?.photoURL}
            alt="Avatar"
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <Link
              to="/profile/my-profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Profile
            </Link>
            <button onClick={handelLogOut}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
