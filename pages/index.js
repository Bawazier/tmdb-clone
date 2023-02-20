import React from "react";
// import Head from "next/head";
import { Container } from "@chakra-ui/react";

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/en-US/movies/popular",
      permanent: false,
    },
  };
}

export default function Home() {
  return <Container></Container>;
}
