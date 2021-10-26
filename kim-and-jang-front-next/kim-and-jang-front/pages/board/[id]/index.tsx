import React from "react";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import CardList from "@components/CardList";
import BoardHeader from "@components/BoardHeader";
import { ICard, ICardList } from "@typings/db";

const Board = () => {
  const router = useRouter();
  const { id } = router.query;

  const cardList = [
    {
      id: 1,
      title: "todo",
      cards: [
        {
          id: 1,
          title: "title1",
          content: "content1",
        },
        {
          id: 2,
          title: "title2",
          content: "content2",
        },
      ],
    },
    {
      id: 2,
      title: "doing",
      cards: [],
    },
    {
      id: 3,
      title: "done",
      cards: [],
    },
  ];

  return (
    <Layout>
      <BoardHeader />
      <h1>Board : {id}</h1>
      {cardList.map((card) => (
        <CardList key={card.id} cards={card.cards} />
      ))}

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
