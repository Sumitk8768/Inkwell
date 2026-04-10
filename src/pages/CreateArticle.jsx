import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Article } from "../context/BlogContext";
import { nanoid } from "nanoid";
import { Auth } from "../context/AuthContext";

const CreateArticle = () => {
  const navigate = useNavigate();
  let { articleList, setArticleList } = useContext(Article);
    let { loggedInUser } = useContext(Auth);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const id = nanoid();
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
   const author = loggedInUser.name;
    const articleWithId = { ...data, id: id, date: date, author: author };

    const newArticleList = [...articleList, articleWithId];

    setArticleList(newArticleList);
    localStorage.setItem("article info", JSON.stringify(newArticleList));

    reset();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen  bg-gray-50 p-8">
      {/* Back Button */}
      <div className="mx-auto max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className=" flex items-center text-gray-500 hover:text-gray-800 mb-6 text-sm"
        >
          <i className="ri-arrow-left-line mr-2"></i> Back to Dashboard
        </button>
      </div>

      {/* Form Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-left">
        <h1 className="text-xl font-bold mb-8 text-gray-900">
          Create New Article
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              placeholder="Enter a compelling title..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#0056A4]"
            />
            {errors.title && (
              <span className="text-red-500 text-xs">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Excerpt
            </label>
            <textarea
              {...register("excerpt", { required: "Excerpt is required" })}
              rows="3"
              placeholder="Write a brief summary of your article..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#0056A4] resize-none"
            ></textarea>
            <p className="text-xs text-gray-600 mt-2">
              A short description that appears on the blog listing
            </p>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Content
            </label>
            <textarea
              {...register("content", { required: "Content is required" })}
              rows="6"
              placeholder="Write your article content here... (Markdown supported)"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#0056A4] font-mono"
            ></textarea>
            <p className="text-xs text-gray-600 mt-2">
              Supports Markdown: ## for headers, **bold**, *italic*, `code`,
              etc.
            </p>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Tags
            </label>
            <input
              {...register("tags")}
              type="text"
              placeholder="Add tags (press Enter to add)"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#0056A4]"
            />
            <p className="text-xs text-gray-600 mt-2">
              Add up to 5 tags to help readers find your article
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 rounded-lg font-medium hover:bg-gray-50"
            >
              <i className="ri-save-line"></i> Save as Draft
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-2.5 bg-[#0056A4] text-white rounded-lg font-medium hover:bg-[#004485]"
            >
              <i className="ri-send-plane-fill"></i> Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateArticle;