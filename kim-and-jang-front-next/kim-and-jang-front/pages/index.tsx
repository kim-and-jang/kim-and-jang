import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "@components/Layout";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Title>Kim And Jang</Title>
      </Layout>
    </div>
  );
};

export default Home;
