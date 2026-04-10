import { useContext, useState } from "react";
import { Article } from "../context/BlogContext";
import BlogCard from "../components/BlogCard";

const Home = () => {

  let {articleList, setArticleList} = useContext(Article)

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-5xl w-fit mx-auto font-bold mt-10">
        Welcome to <span className="text-[#0056A4]">Inkwell</span>
      </h1>
      <p className="text text-[18px] text-gray-600 w-[35em] mx-auto mt-6 p-auto">
        Discover thoughtful articles on technology, programming, and software
        engineering from passionate writers.
      </p>

      {articleList ? (<div className="px-[10em] justify-center ">
        <h3 className="mt-10 font-semibold text-2xl">Latest Articles</h3>

      <div className="mt-6 flex flex-wrap gap-8 ">
           {articleList.map((e)=>
           <BlogCard key={e.id}  info={e}/>
           )}
      </div>
      </div>) : (        <h3 className="mt-10 font-semibold text-2xl">No Articles plz Add</h3>
)}
    </div>
  );
};

export default Home;
