import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className='cards'>
        {cities.map((city, i) => (
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
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
