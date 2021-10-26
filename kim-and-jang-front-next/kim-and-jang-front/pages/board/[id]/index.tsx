import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import CardList from "@components/CardList";
import BoardHeader from "@components/BoardHeader";
import { ICard, ICardList } from "@typings/db";
import { PlusOutlined } from "@ant-design/icons";

const addCardListButtonStyle = {
  border: "1px solid #DDD",
  borderRadius: "0.2rem",
  padding: "0.5rem",
  margin: "0.25rem",
  height: "fit-content",
  width: "17rem",
};

const Board = () => {
  const router = useRouter();
  const { id } = router.query;

  const [cardList, setCardList] = useState<ICardList[]>([
    {
      id: 0,
      title: "todo",
      cards: [
        {
          id: 1,
          title: "title11",
          content: "content11",
        },
        {
          id: 2,
          title: "title12",
          content: "content12",
        },
      ],
    },
    {
      id: 1,
      title: "doing",
      cards: [
        {
          id: 21,
          title: "title21",
          content: "content21",
        },
        {
          id: 22,
          title: "title22",
          content: "content22",
        },
      ],
    },
    {
      id: 2,
      title: "done",
      cards: [
        {
          id: 31,
          title: "title31",
          content: "content31",
        },
        {
          id: 32,
          title: "title32",
          content: "content32",
        },
        {
          id: 33,
          title: "title33",
          content: "content33",
        },
        {
          id: 34,
          title: "title34",
          content: "content34",
        },
      ],
    },
  ]);

  const addCardList = () => {
    const len = cardList.length;
    const newCardList: ICardList = {
      id: len,
      title: `newCard ${len}`,
      cards: [],
    };
    setCardList([...cardList, newCardList]);
  };

  const addCard = (id: number) => {
    setCardList(
      [...cardList].map((object) => {
        if (object.id === id) {
          const len = object.cards.length;

          const newCard: ICard = {
            id: len,
            title: "title",
            content: "content",
          };
          return {
            ...object,
            cards: [...object.cards, newCard],
          };
        } else return object;
      })
    );
  };

  return (
    <Layout>
      <BoardHeader />
      <h1>Board : {id}</h1>
      <div style={{ display: "flex" }}>
        <>
          {cardList.map((card) => (
            <CardList
              key={card.id}
              id={card.id}
              cards={card.cards}
              title={card.title}
              addCard={addCard}
            />
          ))}
          <div style={addCardListButtonStyle} onClick={addCardList}>
            <PlusOutlined />
            Add another list
          </div>
        </>
      </div>

      {/* <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card
        size="small"
        title="Small size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card> */}
    </Layout>
  );
};

export default Board;
