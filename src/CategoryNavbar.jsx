import { useContext } from "react";
import { NewsContext } from "./NewsContext";
import { useNavigate } from "react-router-dom";

const CategoriesNav = () => {
  const { state, dispatch } = useContext(NewsContext);
  const { categories, selectedCategory } = state;
  const navigate = useNavigate();

  const handleCategClick = (category) => {
    if (selectedCategory !== category) {
      dispatch({ type: "Set_Category", category });
      navigate(`/category/${category}`);
    }
  };

  return (
    <div className="categ-cont">
      <nav className="categories-nav">
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <button
                className={selectedCategory === category ? "active cat-button" : "cat-button"}
                onClick={() => handleCategClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CategoriesNav;

