import BgImgOne from "../../Assets/Images/sliderA_01.7f16b740.jpg";
import BgImgTwo from "../../Assets/Images/sliderA_02.5936693f.jpg";
import BgImgThree from "../../Assets/Images/sliderA_01.7f16b740.jpg";
import BgImgFour from "../../Assets/Images/sliderA_02.5936693f.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SliderComp.css";

function SliderComp() {
  const [Image, setImage] = useState({});
  const sliderData = [
    {
      id: 0,
      receipeName: "Mexican grilled Corn Recipe",
      recipeDescription:
        "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
      card_img: BgImgOne,
      rating: "3",
      duration: "1 Hr",
      Ingredients: [
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
      ],
      Directions: [
        "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",

        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
      ],
    },
    {
      id: 1,
      receipeName: "Roast Chicken With Lemon Gravy",
      recipeDescription:
        "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
      card_img: BgImgTwo,
      rating: "4",
      duration: "10 min",
      Ingredients: [
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
      ],
      Directions: [
        "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",

        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
      ],
    },
    {
      id: 2,
      receipeName: "Mexican grilled Corn Recipe",
      recipeDescription:
        "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
      card_img: BgImgThree,
      rating: "3",
      duration: "1 Hr",
      Ingredients: [
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
      ],
      Directions: [
        "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",

        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
      ],
    },
    {
      id: 3,
      receipeName: "Roast Chicken With Lemon Gravy",
      recipeDescription:
        "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
      card_img: BgImgFour,
      rating: "4",
      duration: "10 min",
      Ingredients: [
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
      ],
      Directions: [
        "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",

        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
      ],
    },
  ];
  const navigate = useNavigate();
  useEffect(() => {
    setImage(sliderData[0]);
  }, []);

  return (
    <div className="container">
      <div
        className="Image-contianer"
        style={{ backgroundImage: `url(${Image.card_img})` }}
      >
        <div className="type-container">Baking</div>
        <div className="title-container">{Image.receipeName}</div>
        <div className="cook-details">
          <div className="detail-cook-container">
            <p>4 Serving</p>
          </div>
          <div className="detail-cook-container">
            <p>4 min</p>
          </div>
          <div className="detail-cook-container">
            <p>By : Sandra Fortin</p>
          </div>
        </div>
        <div className="button-recipe">
          <button
            className="button-recipe-button"
            onClick={() => navigate("/show-recipe", { state: Image })}
          >
            View Recipe
          </button>
        </div>
      </div>
      <div className="button-container">
        {sliderData.map((data, index) => {
          return (
            <div
              className="imagechanger"
              key={index}
              onClick={() => {
                setImage(data);
              }}
            >
              {data.receipeName}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SliderComp;
