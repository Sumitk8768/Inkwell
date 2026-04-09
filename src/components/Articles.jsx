import { useNavigate } from "react-router";
import Blog from "../pages/Blog";

const Articles = () => {
 let navigate = useNavigate();
   return (
    <div className="cursor-pointer flex flex-col gap-4 p-4 rounded-2xl shadow w-80 border border-[#0056A4] transition"
    onClick={()=>navigate('/blog/5')}
    >
      <div className="flex gap-2 items-center">
        <span className="py-1 px-2 text-sm bg-gray-300 rounded-2xl">React</span>
        <span className="py-1 px-2 text-sm bg-gray-300 rounded-2xl">Javascript</span>
        <span className="py-1 px-2 text-sm bg-gray-300 rounded-2xl">Web Development</span>
      </div>
      <h3 className="text-xl font-semibold">Getting Started <br /> With React Hooks</h3>
      <p className="text-gray-600 my-4">React Hooks revolutionized the way we write React components. Introduced in React 16.8, Hooks allow you to use state and other React features without writing a class component.</p>
    
    <div className="flex justify-between text-gray-600">
       <div>
        <i className="ri-user-line"></i>
        <span className="ml-3">Sara chan</span>
       </div>
       <div>
         <i className="ri-calendar-2-line"></i>
        <span className="ml-3">January 15, 2024</span>
       </div>
    </div>

    </div>
  );
};

export default Articles;
