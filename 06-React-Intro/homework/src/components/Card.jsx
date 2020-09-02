import React from "react";

export default function Card(props) {
  // acá va tu código
  return (
    <div className="card" style={{ width: "18rem" }}>
      <h5 className="card-title">{props.name}</h5>

      <div className="card-min">
        <h6>Min</h6>
        <span>{Math.round(props.min - 273)}°</span>
      </div>
      <div>
        <button onClick={props.onClose}>X</button>
      </div>
      <div className="card-max">
        <h6>Max</h6>
        <span>{Math.ceil(props.max - 273)}°</span>
      </div>

      <div className="img-card">
        <img
          src={"http://openweathermap.org/img/wn/" + props.img + "@2x.png"}
          className="card-img"
          alt=""
        />
      </div>
    </div>
  );
}
