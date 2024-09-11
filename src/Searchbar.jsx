import { useContext, useState } from "react";
import { NewsContext } from "./NewsContext";

export default function Searchbar() {
  const { state, dispatch } = useContext(NewsContext);
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);

    const filtered = state.news.filter((article) =>
      article.title.toLowerCase().includes(searchQuery)
    );

    dispatch({ type: "Set_news", news: state.news, filteredNews: filtered });
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
