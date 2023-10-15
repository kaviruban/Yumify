import React, { useState } from "react";
// import { FoodData } from "../../Data/HomePageData";
import "./HomeComp.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { addRecipe } from "../../Features/Send/SendSlice";

// function ShowIngredient(props) {
//   props.map((data, index) => {
//     return data;
//   });
// }

function HomeComponent() {
  const [searchQuery, setSearchQuery] = useState("");

  const fd = useSelector((state) => state?.recipe?.value);
  // console.log(fd);

  const navigate = useNavigate();
  const filteredRecipes = fd?.filter((recipe) =>
    recipe.receipeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="items-cart-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="parent-container">
        {filteredRecipes?.map((data, index) => (
          <div className="individual-food-items" key={index}>
            <div className="content-individual">
              <img src={data.card_img} alt={data.receipeName} />
            </div>
            <div className="content-individual2">
              <p>{data.receipeName}</p>
            </div>
            <div className="total-item-cart-container">
              <div className="left-cart-container">
                <div className="content-individual1">
                  <p>{data.rating}</p>
                </div>
                <div className="content-individual1">
                  <p>{data.duration}</p>
                </div>
              </div>
              <div className="right-cart-container">
                <div
                  className="view-btn1"
                  onClick={() => navigate("/show-recipe", { state: data })}
                >
                  view
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeComponent;
