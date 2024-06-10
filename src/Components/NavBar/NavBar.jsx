import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../provider/Provider';
import AvatarDropdown from '../Avater/Avater';
import SetAdmin from '../../hooks/SetAdmin';
import SetTeacher from '../../hooks/SetTeacher';

const NavBar = () => {
  const { user,logOut } = useContext(authContext)
  const [isAdmin]=SetAdmin()
  const [isTeacher]=SetTeacher()
  let nav = <>

    <li className='font-semibold'><Link to='/'>Home</Link></li>
    <li className='font-semibold'><Link to='/allclasses'>All Classes</Link></li>
    {
      isAdmin&&<li className='font-semibold'><Link to='/dashboard/admin-profile'>Dashboard</Link></li>||isTeacher&&<li className='font-semibold'><Link to='/dashboard/teacher-profile'>Dashboard</Link></li>
    }
    {
      !user?.email && <li className='font-semibold'><Link to='/login'>Login</Link></li>
    }

  </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start z-10">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {nav}
            </ul>
          </div>
          <a className="flex items-center gap-3 text-xl">
            <img className='w-[50px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPwKZsqArADQH80YlaQMxiqAVowGF5GhL_gdu35OHEYW91mrnX6WKKSMpf30nROhp5oI&usqp=CAU" alt="" />
            Edu Tech</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {nav}
          </ul>
        </div>
        <div className="navbar-end ">
        {
      user?.email&&<AvatarDropdown user={user} logout={logOut}></AvatarDropdown>
    }
        </div>
      </div>
    </div>
  );
};

export default NavBar;