import { useContext } from "react";
import { NewsContext } from "./NewsContext";

 const CategoriesNav = ()=>{
    const {state , dispatch} = useContext(NewsContext);
    // console.log(state);
    const {categories , selectedCategory} = state;
    // console.log(categories)

    const handleCategClick = (category)=>{
        dispatch({type: "Set_Category" , category})
    }

    return(
        <div className="categ-cont">
        <nav className="categories-nav">
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button
              className={selectedCategory === category ? 'active cat-button' : 'cat-button'}
              onClick={() => handleCategClick(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
    </div>
    )
}
export default CategoriesNav;





