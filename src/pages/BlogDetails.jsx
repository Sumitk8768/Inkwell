import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Article } from '../context/ArticleData';

const BlogDetails = () => {
  const navigate = useNavigate();
  let {blogArticle, setBlogArticle} = useContext(Article)

console.log("blog",blogArticle)

  const blog = {
    title: 'content',
    author: "Sarah Chen",
    date: "January 15, 2024",
    readTime: "1 min read",
    tags: ["React", "JavaScript", "Web Development"],
    content: "React Hooks revolutionized the way we write React components..."
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
          <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
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
          React Hooks revolutionized the way we write React components. Introduced in React 16.8, 
          Hooks allow you to use state and other React features without writing a class component.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Why Hooks?</h2>
        <p className="leading-relaxed mb-8">
          Before Hooks, if you wanted to use state in a component, you had to use a class component. 
          This led to complex lifecycle methods and hard-to-follow code.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">The useState Hook</h2>
        <p className="leading-relaxed mb-4">
          The most basic Hook is <code>useState</code>. It lets you add state to functional components:
        </p>
        
        {/* Code Block */}
        <div className="bg-gray-100 p-6 rounded-xl my-6 font-mono text-sm overflow-x-auto border border-gray-200">
          <span className="text-blue-600">const</span> [count, setCount] = <span className="text-purple-600">useState</span>(<span className="text-orange-600">0</span>);
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-10">The useEffect Hook</h2>
        <p className="leading-relaxed mb-8">
          <code>useEffect</code> lets you perform side effects in your components. It serves the same 
          purpose as <code>componentDidMount</code>, <code>componentDidUpdate</code>, and 
          <code>componentWillUnmount</code> combined.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Conclusion</h2>
        <p className="leading-relaxed mb-8">
          Hooks make React code more readable, reusable, and easier to test. They represent the 
          future of React development.
        </p>
      </article>
    </div>
  );
};

export default BlogDetails;