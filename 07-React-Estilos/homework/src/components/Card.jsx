import React from "react";
//eslint-disable-next-line
import { Button } from "react-bootstrap";
//eslint-disable-next-line
import CardBoot from "react-bootstrap/Card";
import s from "./Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <CardBoot className={s.card}>
      <CardBoot.Img
        className={s.cardImg}
        variant="top"
        src={"http://openweathermap.org/img/wn/" + props.img + "@2x.png"}
      />
      <CardBoot.Body className={s.cardBody}>
        <CardBoot.Title className={s.cardTitle}>Card Title</CardBoot.Title>
        <CardBoot.Text>
          Some quick example text to 
        </CardBoot.Text>
        
      </CardBoot.Body>
    </CardBoot>
  );
}
