import React, { useState } from 'react';
import "./css/Filter.css";


const Slider = ({ minValue, maxValue }) => {
  // State to hold the current value of the slider
  const [sliderValue, setSliderValue] = useState(0);

  // Event handler for when the slider value changes
  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
  };

  return (
    <div>
      <div className="range">
        <div className="sliderValue">{sliderValue}</div>
        <div className="field">
          <div className="value left">{minValue}</div>
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={sliderValue}
            onChange={handleSliderChange}
          />
          <div className="value right">{maxValue}</div>
        </div>
      </div>
    </div>
  );
};

Slider.defaultProps = {
  minValue: 0,
  maxValue: 100
};

export default Slider;
  
