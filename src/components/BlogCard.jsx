import { useContext } from "react";
import { useNavigate } from "react-router";
import { Article } from "../context/BlogContext";
import { Auth } from "../context/AuthContext";
import { nanoid } from "nanoid";

const BlogCard = ({ info }) => {
  let navigate = useNavigate();

  let { setBlogArticle ,blogArticle } = useContext(Article);
  
  let { content, excerpt, id, tags, title, date , author} = info;

  const tagArray = tags.trim().split(' ');

  const handleCardClick = () => {
    setBlogArticle(info);
    localStorage.setItem("blog article", JSON.stringify(info));
    navigate(`/blog/${info.id}`);
  };

  return (
    <div
      className="cursor-pointer flex flex-col gap-4 p-4 rounded-2xl shadow w-80 border border-[#0056A4] transition"
      onClick={handleCardClick}
    >
      <div className="flex gap-2 items-center flex-wrap">
        <span className="py-1 px-2 text-sm bg-gray-300 rounded-2xl">React</span>
       {tagArray.map((e)=>
           <span key={nanoid()} className="py-1 px-2 text-sm bg-gray-300 rounded-2xl">{e}</span>
       )}
      </div>
      <h3 className="text-xl font-semibold w-45">{title}</h3>
      <p className="text-gray-600 my-4 line-clamp-4">{content}</p>

      <div className="flex justify-between text-gray-600">
        <div>
          <i className="ri-user-line"></i>
          <span className="ml-3">{author || "Guest"}</span>
        </div>
        <div>
          <i className="ri-calendar-2-line"></i>
          <span className="ml-3">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
