import { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Auth } from "../context/AuthContext";

const Navbar = () => {
let {loggedInUser,setLoggedInUser} = useContext(Auth);
  let navigate = useNavigate()
  

  let [show,setShow] = useState('hidden');

  let showOption = () =>{
     setShow(prev => (prev === 'hidden' ? 'block' : 'hidden'));
  }

  let logOut = ()=>{
    localStorage.removeItem("log user");
    setLoggedInUser(null)
     navigate('/auth')
  }  

  return (
    <div className="flex justify-between  border-b border-gray-400 px-[5em] py-[1em] items-center">
      <h2 onClick={()=>navigate('/')} className="cursor-pointer text-2xl font-semibold">Inkwell</h2>
      
   {loggedInUser ? (
  <div className="flex gap-10 items-center">
    <i className="ri-moon-line"></i>

    <div 
      className="flex items-center hover:bg-[#008774] rounded px-3 py-1 cursor-pointer relative"
      onClick={() => showOption()}
    >
      {/* Hidden dashboard */}
      <div className={`border-[#0056A4] border bg-white rounded-2xl ${show} absolute top-13 -left-10 z-10`}>
        <div className="p-3">
          <h2 className="font-bold">{loggedInUser.name}</h2>
          <h3 className="text-sm text-gray-600">{loggedInUser.email}</h3>
          <h3 className="text-xs text-blue-500">{loggedInUser.role}</h3>
        </div>
        
       {(loggedInUser.role === 'Author') ? ( <div 
          className="flex gap-2 px-3 py-3 border-t border-gray-200 hover:bg-gray-50"
          onClick={() => navigate('/dashboard')}
        >
          <i className="ri-dashboard-line"></i>
          <h3>Dashboard</h3>
        </div>) : ""}

        <div 
          className="flex gap-2 px-3 py-3 border-t border-gray-200 hover:bg-gray-50"
          onClick={() => logOut()}
        >
          <i className="ri-logout-box-r-line text-red-500"></i>
          <h3 className="text-red-500">Logout</h3>
        </div>
      </div>
      {/* End Hidden dashboard */}

      {/* Avatar with first letter */}
      <span className="bg-[#0056A4] text-white text-xl px-3 py-1 cursor-pointer rounded-full uppercase">
        {loggedInUser.name[0]}
      </span>
      <span className="ml-5 font-medium">{loggedInUser.name}</span>
    </div>
  </div>
) : (
  <div className="flex gap-4 items-center">
    <i className="ri-moon-line"></i>
    <button 
      className="hover:bg-[#008774] py-1 px-3 rounded hover:text-white cursor-pointer"
      onClick={() => navigate('/auth')}
    >
      Login
    </button>
    <button 
      className="py-1 px-3 bg-[#0056A4] text-white rounded cursor-pointer hover:bg-[#1966AC]"
      onClick={() => navigate('/auth/register')}
    >
      Sign Up
    </button>
  </div>
)}
      
    </div>
  );

  

};

export default Navbar;
