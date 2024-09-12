import Header from "./Header";
import '@fortawesome/fontawesome-free/css/all.css';
import CategoriesNav from "./CategoryNavbar";
import { NewsProvider } from "./NewsContext";
import Searchbar from "./Searchbar";
import NewsList from "./Newscontainer";
import Footer from "./Footer";
import Carousel from "./Carousel";


export default function App(){
  return(
    <NewsProvider>
      <Header/>
      <CategoriesNav />
      {/* <Searchbar/> */}
      <Carousel/>
      <NewsList/>
      <Footer/>
    </NewsProvider>
    
  )
}