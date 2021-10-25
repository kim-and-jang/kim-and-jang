import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <Title>Kim And Jang</Title>
      </Layout>
    </div>
  );
};

export default Home;
