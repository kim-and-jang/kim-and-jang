import React, { FC } from "react";
import { ICard, ICardList } from "@typings/db";
import Card from "./Card";

interface Props {
  cards: ICard[];
}

const CardList: FC<Props> = ({ cards }) => {
  return (
    <>
      <div>CardList</div>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
};

export default CardList;
