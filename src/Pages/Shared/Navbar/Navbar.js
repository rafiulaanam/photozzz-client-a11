import React from 'react';
import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)

  
  const handleSignOut=()=>{
    logOut()
    .then(()=>{})
    .catch(e=>console.error(e))

  }
    return (
        <div>
            <div className="navbar bg-base-100 ">
  <div className="flex-1">
    <Link to={'/'} className="btn btn-ghost normal-case text-xl">PhotoZZZ</Link>
  </div>
  <div className="flex-none">
  <div className="navbar-end mr-3">
  <Link to={'/blog'}  className="btn btn-ghost">Blog</Link>
</div>
 
  {
    user?.uid ?
    <Link to={'/review'}  className="btn btn-ghost">Review</Link>
    :
   <>
     <div className="navbar-end mr-2">
  <Link to={'/login'}  className="btn btn-info">Login</Link>
</div>
  <div className="navbar-end mr-4">
    <Link to={'/register'}  className="btn btn-primary">Register</Link>
  </div>
   </>
    

    
  }
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <Link to={'/orders'}><button className="btn btn-primary btn-block">View cart</button></Link>
          </div>
        </div>
      </div>
    </div>
    <p >{user?.displayName}</p>
    {
      user?.uid ? 
<div className="dropdown dropdown-end ml-4">
    
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      
      <div className="w-10 rounded-full">
        <img alt='' src={user?.photoURL} />
        
      </div>
    </label>
    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <a href="#!" className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li><a href="#!">Settings</a></li>
      <li><button onClick={handleSignOut}>Logout</button></li>
    </ul>
  </div>
      :
      <span className='ml-3'><FaUser ></FaUser></span>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;