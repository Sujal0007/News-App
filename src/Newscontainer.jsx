import  { useContext , useEffect, useState } from 'react';
import { NewsContext } from './NewsContext';

const NewsList = () => {
  const { state , dispatch } = useContext(NewsContext);
//   console.log(state);
  const { filteredNews } = state;
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [page , setPage] = useState(1);
  const [loading , setLoading] = useState(false);

  const fetchMoreNews = ()=>{
    setLoading(true);
    // console.log('Fetching');
    fetch(`/api/news?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log('Data', data); 
      dispatch({type:"Set_news" , news:[...filteredNews , ...data.news]})
      setPage(page + 1);
      setLoading(false)
      // console.log("calling")
    })
  }

  const handleScroll = ()=>{
    // console.log('Scroll');
    if(window.innerHeight + window.scrollY >= document.body.scrollHeight - 50
    ){
      fetchMoreNews()
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll" , handleScroll)

    return ()=> window.removeEventListener("scroll" , handleScroll);
  },[loading , filteredNews , page])

  const handlereadMore = (article)=>{
    setSelectedArticle(article);
  }

  const handleBack = ()=>{
    setSelectedArticle(null);
  }

  if (selectedArticle){
    return (
        <div className="article-detail">
          <button onClick={handleBack}><i className="fa-solid fa-angles-left"></i></button>
          <h1>{selectedArticle.title}</h1>
          <img src={selectedArticle.image} alt={selectedArticle.title} />
          <p>{selectedArticle.content}</p>
        </div>
      );
  }

  return (
    <>
    <div className="title">
            <h1 style={{color:"red" , fontSize:"50px" , borderBottom:"2px solid black"  , margin:"1rem"}}>News <span style={{color:"black" , fontSize:"40px"}}>World</span></h1>
        </div>
    <div className="news-list">
      <ul>
        {filteredNews.map((article) => (
          <li>
            <div>
            <img src={article.image} alt={article.title} />
            </div>
            <div className='detail-div'>
            <h2>{article.title}</h2>
            <p>{article.content.substring(0, 200)}...</p>
            

            <button onClick={()=> handlereadMore(article)}>Read More</button>
            </div>
          </li>
        ))}
      </ul>
      {/* {loading && <p>Loading news...</p>} */}
    </div>
    </>
  );
};

export default NewsList;
