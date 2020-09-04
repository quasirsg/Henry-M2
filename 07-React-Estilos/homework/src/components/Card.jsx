import React from "react";
import { Button } from "react-bootstrap";
//eslint-disable-next-line
import CardBoot from "react-bootstrap/Card";

export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <CardBoot style={{ width: "19rem" }}>
        <CardBoot.Img
          variant="top"
          src={"http://openweathermap.org/img/wn/" + props.img + "@2x.png"}
        />
        <CardBoot.Body>
          <CardBoot.Title>Card Title</CardBoot.Title>
          <CardBoot.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardBoot.Text>
          <Button variant="primary">Go somewhere</Button>
        </CardBoot.Body>
      </CardBoot>
    </div>
  );
}
