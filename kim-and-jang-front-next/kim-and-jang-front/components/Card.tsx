import React, { FC } from "react";
import { ICard, ICardList } from "@typings/db";

interface Props {
  card: ICard;
}

const cardStyle = {
  border: "1px solid #DDD",
};

const Card: FC<Props> = ({ card }) => {
  return <div style={cardStyle}>card {card.title}</div>;
};

export default Card;
