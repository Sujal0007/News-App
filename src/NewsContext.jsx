import { useState, useEffect , createContext, useReducer } from "react";
import { makeserver } from "./mirage";
makeserver();

export const NewsContext = createContext();

const initialState = {
    news:[],
    categories:[],
    filteredNews : [],
    selectedCategory : "All",
   
}

function newsReducer(state , action){
    switch(action.type){
        case "Set_categories":
            return {
                ...state,
                categories: action.categories,
              };
        case "Set_news":
            return{
                ...state,
                news:action.news,
                filteredNews: action.filteredNews || action.news,
            };
        case "Set_Category" :
            return{
                ...state,
                selectedCategory:action.category,
                filteredNews: action.category === "All" ? state.news : state.news.filter((article) => article.category === action.category),
            }
       
        default:
            return state;

    }
}


 export const NewsProvider = ({ children }) => {
      const [state, dispatch] = useReducer(newsReducer, initialState);
    
      useEffect(() => {
        fetch('/api/news')
          .then((res) => res.json())
          .then((data) => {
            dispatch({ type: 'Set_news', news: data.news });
          });
    
        fetch('/api/categories')
          .then((res) => res.json())
          .then((data) => {
            dispatch({ type: 'Set_categories', categories: data.categories });
          });
      }, []);
    
      return (
        <NewsContext.Provider value={{ state, dispatch }}>
          {children}
        </NewsContext.Provider>
      );
    };