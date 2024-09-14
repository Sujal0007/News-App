import { useContext, useEffect, useState } from "react";
import { NewsContext } from "./NewsContext";
import { useSearchParams } from "react-router-dom";

export default function Searchbar() {
  const { state, dispatch } = useContext(NewsContext); 
  const [query, setQuery] = useState(""); 
  const [searchParams, setSearchParams] = useSearchParams(); 

 
  const filterNews = (searchQuery, selectedCategory) => {
    const filtered = state.news.filter((article) => {
      const matchesQuery = article.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      return matchesQuery && matchesCategory; 
    });
    dispatch({ type: "Set_filtered_news", filteredNews: filtered }); 
  };

  useEffect(() => {
    const queryParam = searchParams.get("q") || ""; 
    setQuery(queryParam); 
    
  
    const selectedCategory = state.selectedCategory || "All"; 

    if (queryParam || selectedCategory !== "All") {
      filterNews(queryParam, selectedCategory);
    } else {
      dispatch({ type: "Set_filtered_news", filteredNews: state.news }); 
    }
  }, [searchParams, state.news, state.selectedCategory, dispatch]); 


  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase(); 
    setQuery(searchQuery); 
    setSearchParams({ q: searchQuery }); 

    
    const selectedCategory = state.selectedCategory || "All";
    filterNews(searchQuery, selectedCategory);
  };

  return (
    <div className="searchbar-div">
      <input
        type="text"
        placeholder="Search News..."
        value={query} 
        onChange={handleSearch} 
      />
    </div>
  );
}
