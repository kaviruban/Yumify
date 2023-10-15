import React from "react";
import BgImg from "../../Assets/Images/sliderA_01.7f16b740.jpg";
import "./RecipeComp.css";
import { useLocation } from "react-router-dom";

function ReceipeComponent() {
  const { state } = useLocation();

  return (
    <div className="main-container">
      <div className="bg-image">
        <img
          className="bg-img-recipe-page"
          src={BgImg}
          alt="background-image-recipe-page"
        />
      </div>
      <div className="recipe-container">
        <div className="recipe">
          <div className="header-recipe-container">
            <p>{state.receipeName}</p>
            <p>Rating : {state.rating}</p>
          </div>
          <div className="image-recipe-container">
            <img src={state.card_img} alt="" />
          </div>
          <div className="details-receipe-container">
            <div className="detail-container">
              <h3 className="tt">Servs: </h3>
              <p>4 Servings</p>
            </div>
            <div className="detail-container">
              <h3 className="tt">Prep Time: </h3>
              <p>4 min</p>
            </div>
            <div className="detail-container">
              <h3 className="tt">Calories: </h3>
              <p>112 kcal</p>
            </div>
          </div>
        </div>
      </div>
      <div className="div-details">
        <div className="para">
          <p>{state.recipeDescription}</p>
        </div>
      </div>
      <div className="left-right">
        <div className="center-container">
          <div className="ingredients-container">
            <h3>Ingrediants</h3>
            {state.Ingredients.map((ingredient, index) => (
              <p key={index}>
                {ingredient.quantity}:{ingredient.name}
              </p>
            ))}
          </div>
          <div className="directions-container">
            <h3>Directions</h3>
            {state.Directions.map((direction, index) => (
              <p key={index}>
                {index + 1} {direction}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceipeComponent;
