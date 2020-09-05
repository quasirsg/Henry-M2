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
      <div className={s.buttonX}>
        <Button onClick={props.onClose} size="sm" variant="danger">
          X
        </Button>
      </div>

      <CardBoot.Img
        className={s.cardImg}
        variant="top"
        src={"http://openweathermap.org/img/wn/" + props.img + "@2x.png"}
      />
      <CardBoot.Body className={s.cardBody}>
        <CardBoot.Title className={s.cardTitle}>{props.name}</CardBoot.Title>
        <div className={s.cardBodyItems}>
          <h6>Min</h6>
          <span>{Math.round(props.min - 273)}°</span>
        </div>
        <div className={s.cardBodyItems}>
          <h6>Max</h6>
          <span>{Math.ceil(props.max - 273)}°</span>
        </div>
      </CardBoot.Body>
    </CardBoot>
  );
}
