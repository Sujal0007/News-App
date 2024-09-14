import { useContext, useEffect, useState } from "react";
import { NewsContext } from "./NewsContext";
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";

const NewsList = () => {
  const { state, dispatch } = useContext(NewsContext);
  const { filteredNews } = state;
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      dispatch({ type: "Set_Category", category });
    }
  }, [category, dispatch]);

  const fetchMoreNews = () => {
    setLoading(true);
    fetch(`/api/news?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "Set_news",
          news: [...filteredNews, ...data.news],
        });
        setPage(page + 1);
        setLoading(false);
      });
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
      fetchMoreNews();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, filteredNews, page]);

  const handlereadMore = (article) => {
    setSelectedArticle(article);
  };

  const handleBack = () => {
    setSelectedArticle(null);
  };

  if (selectedArticle) {
    return (
      <div className="article-detail">
        <button onClick={handleBack}>
          <i className="fa-solid fa-angles-left"></i>
        </button>
        <h1>{selectedArticle.title}</h1>
        <img src={selectedArticle.image} alt={selectedArticle.title} />
        <p>{selectedArticle.content}</p>
      </div>
    );
  }

  return (
    <>
      <div className="news-list">
        <Carousel />
        <div className="title">
          <h1 style={{ color: "red", fontSize: "50px", borderBottom: "2px solid black", margin: "1rem" }}>
            News <span style={{ color: "black", fontSize: "40px" }}>World</span>
          </h1>
        </div>
        <ul>
          {filteredNews.map((article) => (
            <li key={article.id}>
              <div>
                <img src={article.image} alt={article.title} />
              </div>
              <div className="detail-div">
                <h2>{article.title}</h2>
                <p>{article.content.substring(0, 200)}...</p>
                <button onClick={() => handlereadMore(article)}>Read More</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NewsList;
