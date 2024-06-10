import React, { useContext } from 'react';
import { authContext } from '../provider/Provider';

const UserProfile = () => {
    const {user}=useContext(authContext)
    return (
        <div>
            <div className="min-h-screen dark:bg-slate-800 gap-6 flex items-center justify-center">
  <div
    className="bg-gray-100 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
    <div className="flex items-center gap-4">
      <img src={user?.photoURL}
      className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
    />
      <div className="w-fit transition-all transform duration-500">
        <h1 className="text-gray-600 dark:text-gray-200 font-bold">
          {user?.displayName}
        </h1>
        <a
          className="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
         {user?.email}
        </a>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default UserProfile;