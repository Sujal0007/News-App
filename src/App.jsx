import Header from "./Header";
import '@fortawesome/fontawesome-free/css/all.css';
import CategoriesNav from "./CategoryNavbar";
import { NewsProvider } from "./NewsContext";
import Searchbar from "./Searchbar";
import NewsList from "./Newscontainer";


export default function App(){
  return(
    <NewsProvider>
      <Header/>
      <CategoriesNav />
      <Searchbar/>
      <NewsList/>
    </NewsProvider>
    
  )
}