import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Article } from '../context/BlogContext';
import { nanoid } from "nanoid";
import { Auth } from '../context/AuthContext';

const BlogDetails = () => {
  const navigate = useNavigate();
  let {blogArticle, setBlogArticle} = useContext(Article)
  let { loggedInUser } = useContext(Auth);

  console.log(blogArticle)

  const blog = {
    title: blogArticle.title,
    // author: loggedInUser.name,
    author: "Sumit",
    date: blogArticle.date,
    readTime: "1 min read",
    tags: (blogArticle.tags).trim().split(' '),
    excerpt: blogArticle.excerpt,
    content: blogArticle.content,
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 font-sans text-gray-900">
      
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-500 hover:text-gray-800 transition-colors mb-8 text-sm"
      >
        <i className="ri-arrow-left-line mr-2"></i> Back to Articles
      </button>

      {/* Tags */}
      <div className="flex gap-3 mb-6">
        {blog.tags.map((tag) => (
          <span key={nanoid()} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>

      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 tracking-tight text-gray-900">
        {blog.title}
      </h1>

      {/* Meta Info */}
      <div className="flex items-center gap-6 text-gray-500 text-sm  pb-10">
        <div className="flex items-center gap-2">
          <i className="ri-user-line text-lg"></i>
          <span>{blog.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="ri-calendar-line text-lg"></i>
          <span>{blog.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="ri-time-line text-lg"></i>
          <span>{blog.readTime}</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <p className="leading-relaxed mb-8">
          {blog.excerpt}
        </p>

        {/* <h2 className="text-2xl font-bold mb-4 mt-10">Why Hooks?</h2> */}
        <p className="leading-relaxed mb-8">
         {blog.content}
        </p>
      </article>
    </div>
  );
};

export default BlogDetails;