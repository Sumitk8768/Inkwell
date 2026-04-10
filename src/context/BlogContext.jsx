import { useState, createContext } from "react";

export let Article = createContext();

export let ArticleProvider = ({ children }) => {
  const [articleList, setArticleList] = useState(
    JSON.parse(localStorage.getItem("article info")) || [],
  );

  const [blogArticle, setBlogArticle] = useState(
    JSON.parse(localStorage.getItem("blog article")) || [],
  );

  return (
    <Article.Provider
      value={{ articleList, setArticleList, blogArticle, setBlogArticle }}
    >
      {children}
    </Article.Provider>
  );
};
