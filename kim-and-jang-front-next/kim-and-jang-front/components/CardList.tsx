import React, { FC } from "react";
import { ICard, ICardList } from "@typings/db";

interface Props {
  cards: ICard[];
}

const CardList: FC<Props> = ({ cards }) => {
  return <div>CardList</div>;
};

export default CardList;
