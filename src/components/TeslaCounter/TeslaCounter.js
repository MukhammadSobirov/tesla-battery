import React from "react";
import "./TeslaCounter.css";

const TeslaCounter = (props) => (
  <div className="tesla-counter">
    <p className="tesla-counter__title">{props.initValues.title}</p>
    <div className="tesla-counter__container cf">
      <div className="tesla-counter__item">
        <p className="tesla-counter__number">
          {props.currentValue}
          <span>{props.initValues.unit}</span>
        </p>
        <div className="tesla-counter__controls">
          <button
           onClick={(e) => {
            e.preventDefault();
            props.increment(props.currentValue)}}
            disabled={props.currentValue >= props.initValues.max}
          ></button>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.decrement(props.currentValue)}}
            disabled={props.currentValue <= props.initValues.min}
          ></button>
        </div>
      </div>
    </div>
  </div>
);

export default TeslaCounter;
