import Header from "./Header";
import '@fortawesome/fontawesome-free/css/all.css';
import CategoriesNav from "./CategoryNavbar";
import { NewsProvider } from "./NewsContext";
// import Searchbar from "./Searchbar";
import NewsList from "./Newscontainer";
import Footer from "./Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



export default function App(){
  return(
    <NewsProvider>
      <Router>
        <Header/>
        <CategoriesNav />
        
        <Routes>
        {/* <Route path="/search" element={<Searchbar />} /> */}
          <Route path="/" element={<NewsList />} />
        
          <Route path="/category/:category" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsList />} />
        </Routes>
        <Footer/>
      </Router>
    </NewsProvider>
    
  )
}