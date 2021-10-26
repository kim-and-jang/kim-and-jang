import React, { FC } from "react";
import { ICard, ICardList } from "@typings/db";
import Card from "./Card";
import { PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";

interface Props {
  id: number;
  cards: ICard[];
  title: string;
  addCard: (id: number) => void;
}

const cardListWrapperStyle = {
  border: "1px solid #DDD",
  borderRadius: "0.2rem",
  background: "#eee",
  padding: "0.5rem",
  margin: "0.25rem",
  height: "fit-content",
  width: "17rem",
};

const CardList: FC<Props> = ({ id, cards, title, addCard }) => {
  const handleClickAddCard = () => {};

  return (
    <div style={cardListWrapperStyle}>
      <div style={{ marginBottom: "0.5rem" }}>
        {title} {id}
      </div>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
      <AddButton onClick={() => addCard(id)}>
        <PlusOutlined />
        Add a Card
      </AddButton>
    </div>
  );
};

const AddButton = styled.div``;

export default CardList;
