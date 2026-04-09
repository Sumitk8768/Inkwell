import { useContext } from "react";
import { useNavigate } from "react-router";
import { Article } from "../context/ArticleData";
import { Auth } from "../context/AuthContext";

const Articles = ({info}) => {
 let navigate = useNavigate();
let {loggedInUser} = useContext(Auth);

let {blogArticle, setBlogArticle} = useContext(Article)
 setBlogArticle(info)
 localStorage.setItem('blog article',JSON.stringify(info))
console.log("info",info)

 let {
content,
excerpt,
id,
tags,
title,
date,
} = blogArticle;


   return (
    <div className="cursor-pointer flex flex-col gap-4 p-4 rounded-2xl shadow w-80 border border-[#0056A4] transition"
    onClick={()=>navigate(`/blog/${info.id}`)}
    >
      <div className="flex gap-2 items-center">
        <span className="py-1 px-2 text-sm bg-gray-300 rounded-2xl">React</span>
        <span className="py-1 px-2 text-sm bg-gray-300 rounded-2xl">Javascript</span>
        <span className="py-1 px-2 text-sm bg-gray-300 rounded-2xl">Web Development</span>
      </div>
      <h3 className="text-xl font-semibold w-45">{title}</h3>
      <p className="text-gray-600 my-4">{content}</p>
    
    <div className="flex justify-between text-gray-600">
       <div>
        <i className="ri-user-line"></i>
        <span className="ml-3">{loggedInUser.name}</span>
       </div>
       <div>
         <i className="ri-calendar-2-line"></i>
        <span className="ml-3">{date}</span>
       </div>
    </div>

    </div>
  );
};

export default Articles;
