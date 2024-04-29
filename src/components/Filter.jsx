import { useState } from "react";
import "./css/Filter.css";
import Button from "./Button";
import Slider from "./Slider";
import StarRating from './StarRating';


function Filter() {
  const [count, setCount] = useState(0);
  const [buttonClicked, setButtonClicked] = useState({});

  const handleButtonClick = (buttonName) => {
    setButtonClicked((prevClicked) => ({
      ...prevClicked,
      [buttonName]: !prevClicked[buttonName],
    }));
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Filters</h1>
        </div>
        <div>
          <h2>Dietary Restrictions</h2>
        </div>
        <div>
          <button>Vegetarian</button>
          <button>Vegan</button>
          <button>Halal</button>
          <button>Gluten-Free</button>
        </div>
        <div>
          <h2>Cuisine</h2>
        </div>
        <div>
          <button>American</button>
          <button>Asian</button>
          <button>European</button>
          
        </div>
        <div>
          <h2>Cooking Duration</h2>
        </div>
        <Slider minValue={10} maxValue={180} />
        <div>
          <h2>Cost</h2>
        </div>
        <Slider minValue={10} maxValue={50} />
        <div>
          <h2>Difficulty</h2>
        </div>
        <div>
          <div>
            <StarRating totalStars={5} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
