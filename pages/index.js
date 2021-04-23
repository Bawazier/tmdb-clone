import Head from "next/head";
import styles from "../styles/Home.module.css";
import { top_rated } from "../libs/api/tv-shows";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";

export default function Home() {
  const { data, isSuccess, isError, error } = useQuery(["test-movies"], () => top_rated(), {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 2,
    cacheTime: 1000 * 60,
  });
  if (isSuccess) {
    console.log(data);
  }
  if(isError){
    console.log(error);
  }
  return (
    <div>
      <p>HELLO WORLD</p>
    </div>
  );
}
