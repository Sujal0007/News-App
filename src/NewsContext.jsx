
import { useState, useEffect, createContext, useReducer } from "react";
import { makeserver } from "./mirage";

makeserver();

export const NewsContext = createContext();

const initialState = {
  news: [],
  categories: [],
  filteredNews: [],
  selectedCategory: "All", 
};

function newsReducer(state, action) {
  switch (action.type) {
    case "Set_categories":
      return {
        ...state,
        categories: action.categories,
      };
    case "Set_news":
      return {
        ...state,
        news: action.news,
        
        filteredNews:
          state.selectedCategory === "All"
            ? action.news
            : action.news.filter((article) => article.category === state.selectedCategory),
      };
    case "Set_Category":
      localStorage.setItem("selectedCategory", action.category); 
      return {
        ...state,
        selectedCategory: action.category,
        filteredNews:
          action.category === "All"
            ? state.news
            : state.news.filter((article) => article.category === action.category),
      };
      case "Set_filtered_news":
      return {
        ...state,
        filteredNews: action.filteredNews, 
      };
    default:
      return state;
  }
}

export const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(newsReducer, initialState);
  // const [selectedCategory, setSelectedArticle] = useState(null);
  useEffect(() => {
    
    const savedCategory = localStorage.getItem("selectedCategory") || "All";

    
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "Set_news", news: data.news });
        dispatch({ type: "Set_Category", category: savedCategory }); 
      });

   
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "Set_categories", categories: data.categories });
      });
  }, []);

  return (
    <NewsContext.Provider value={{ state, dispatch}}>
      {children}
    </NewsContext.Provider>
  );
};
