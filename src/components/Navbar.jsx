import { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Auth } from "../context/AuthContext";

const Navbar = () => {
let {setRegisterUsers, registerUsers} = useContext(Auth);
  let navigate = useNavigate()

  let [show,setShow] = useState('hidden');

  let showOption = () =>{
     setShow(prev => (prev === 'hidden' ? 'block' : 'hidden'));
  }

  return (
    <div className="flex justify-between  border-b border-gray-400 px-[5em] py-[1em] items-center">
      <h2 className="text-2xl font-semibold">Inkwell</h2>
      <div className="flex gap-10 items-center">
        <i className="ri-moon-line"></i>
        {/* <i className="ri-sun-line"></i> */}
        <div className="flex items-center hover:bg-[#008774] rounded px-3 py-1 cursor-pointer relative"
        onClick={()=>showOption()}
        >
          {/* Hiden daboard */}
          <div className={`border-[#0056A4] border bg-white  rounded-2xl ${show}  absolute top-13 -left-10 `}>
             <div className="p-3">
              <h2>Sumit kumar</h2>
             <h3 className="font-">sumitkumar72004@gmail.com</h3>
             <h3>Author</h3>
             </div>
             <div className="flex gap-2 px-3 py-3  border-t border-gray-500"
             onClick={()=>navigate('/dashboard')}
             >
              <i className="ri-dashboard-line"></i>
              <h3>Dashboard</h3>
             </div>
             <div className="flex gap-2 px-3 py-3 border-t border-gray-500"
             onClick={()=>navigate('/auth')}
             >
              <i className="ri-logout-box-r-line"></i>
              <h3 className="text-red-500">Logout</h3>
             </div>
          </div>
           {/* Hiden daboard */}
          <span className="bg-[#0056A4] text-white text-xl px-3 py-1 cursor-pointer rounded-[100%]">S</span>
          <span className="ml-5 font-medium">Sumit kumar</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
