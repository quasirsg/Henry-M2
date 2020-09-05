import React from "react";
import Card from './Card.jsx';
import s from "./Cards.module.css";
export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={s.cardsContainer}>
      {props.cities.map((city, i) => (
        <Card
          name={city.name}
          max={city.main.temp_max}
          min={city.main.temp_min}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
          key={i}
        />
      ))}
    </div>
  );
}
