import React, { FC } from "react";
import { ICard, ICardList } from "@typings/db";

interface Props {
  card: ICard;
}

const cardStyle = {
  border: "1px solid #DDD",
  borderRadius: "0.2rem",
  marginBottom: "0.5rem",
};

const Card: FC<Props> = ({ card }) => {
  return (
    <div style={cardStyle}>
      card {card.title} {card.content}
    </div>
  );
};

export default Card;
