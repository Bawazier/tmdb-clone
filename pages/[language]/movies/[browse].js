import React from "react";
// import Head from "next/head";
import {
  popular,
  top_rated,
  upcoming,
  now_playing,
} from "../../../libs/api/movies";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import MainList from "../../../components/main-list";
import SecondList from "../../../components/second-list";
import MainItem from "../../../components/main-item";
import { VStack, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["popular-movies", params.language], popular);
  await queryClient.prefetchQuery(
    ["top_rated-movies", params.language],
    top_rated
  );
  await queryClient.prefetchQuery(
    ["upcoming-movies", params.language],
    upcoming
  );
  await queryClient.prefetchQuery(
    ["now_playing-movies", params.language],
    now_playing
  );
  return {
    props: { dehydratedState: dehydrate(queryClient) }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { language: "en-US", browse: "popular" } },
      { params: { language: "en-US", browse: "top-rated" } },
      { params: { language: "en-US", browse: "upcoming" } },
      { params: { language: "en-US", browse: "now-playing" } },
    ],
    fallback: false,
  };
}

export default function Browse() {
  const URL_IMAGE = process.env.NEXT_PUBLIC_API_URL_IMAGE;
  const router = useRouter();
  const { language, browse } = router.query;

  const option = {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 2,
    cacheTime: Infinity,
  };
  const Popular = useQuery(["popular-movies", language], popular, option);
  const TopRated = useQuery(["top-rated-movies", language], top_rated, option);
  const Upcoming = useQuery(["upcoming-movies", language], upcoming, option);
  const NowPlaying = useQuery(
    ["now-playing-movies", language],
    now_playing,
    option
  );
  return (
    <Box bg="white">
      <Header />
      <VStack spacing="-100px">
        {browse === "popular" && Popular.isSuccess && (
          <MainItem
            title={Popular.data[0]?.title}
            overview={Popular.data[0]?.overview}
            backdrop={URL_IMAGE + "/original" + Popular.data[0]?.backdrop_path}
            onOpen={() =>
              router.push(`/${language}/movies/title/${Popular.data[0]?.id}`)
            }
          />
        )}
        {browse === "top-rated" && TopRated.isSuccess && (
          <MainItem
            title={TopRated.data[0]?.title}
            overview={TopRated.data[0]?.overview}
            backdrop={URL_IMAGE + "/original" + TopRated.data[0]?.backdrop_path}
            onOpen={() =>
              router.push(`/${language}/movies/title/${TopRated.data[0]?.id}`)
            }
          />
        )}
        {browse === "upcoming" && Upcoming.isSuccess && (
          <MainItem
            title={Upcoming.data[0]?.title}
            overview={Upcoming.data[0]?.overview}
            backdrop={URL_IMAGE + "/original" + Upcoming.data[0]?.backdrop_path}
            onOpen={() =>
              router.push(`/${language}/movies/title/${Upcoming.data[0]?.id}`)
            }
          />
        )}
        {browse === "now-playing" && NowPlaying.isSuccess && (
          <MainItem
            title={NowPlaying.data[0]?.title}
            overview={NowPlaying.data[0]?.overview}
            backdrop={
              URL_IMAGE + "/original" + NowPlaying.data[0]?.backdrop_path
            }
            onOpen={() =>
              router.push(`/${language}/movies/title/${NowPlaying.data[0]?.id}`)
            }
          />
        )}
        <VStack maxW="full" bg="white" spacing="14px">
          {browse === "popular" && Popular.isSuccess && (
            <MainList
              title="Popular Movies"
              data={Popular.data}
              onOpen={(id) => router.push(`/${language}/movies/title/${id}`)}
            />
          )}
          {browse === "top-rated" && TopRated.isSuccess && (
            <MainList
              title="Top Rated Movies"
              data={TopRated.data}
              onOpen={(id) => router.push(`/${language}/movies/title/${id}`)}
            />
          )}
          {browse === "upcoming" && Upcoming.isSuccess && (
            <MainList
              title="Upcoming Movies"
              data={Upcoming.data}
              onOpen={(id) => router.push(`/${language}/movies/title/${id}`)}
            />
          )}
          {browse === "now-playing" && NowPlaying.isSuccess && (
            <MainList
              title="Now Playing Movies"
              data={NowPlaying.data}
              onOpen={(id) => router.push(`/${language}/movies/title/${id}`)}
            />
          )}

          {browse === "popular" &&
            TopRated.isSuccess &&
            NowPlaying.isSuccess &&
            Upcoming.isSuccess &&
            Popular.isSuccess && (
              <VStack bg="white" spacing="14px">
                <SecondList
                  title="Top Rated Movies"
                  data={TopRated.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
                <SecondList
                  title="Now Playing Movies"
                  data={NowPlaying.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
                <SecondList
                  title="Upcoming Movies"
                  data={Upcoming.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
              </VStack>
            )}
          {browse === "top-rated" &&
            TopRated.isSuccess &&
            NowPlaying.isSuccess &&
            Upcoming.isSuccess &&
            Popular.isSuccess && (
              <VStack bg="white" spacing="14px">
                <SecondList
                  title="Popular Movies"
                  data={Popular.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
                <SecondList
                  title="Now Playing Movies"
                  data={NowPlaying.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
                <SecondList
                  title="Upcoming Movies"
                  data={Upcoming.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
              </VStack>
            )}
          {browse === "upcoming" &&
            TopRated.isSuccess &&
            NowPlaying.isSuccess &&
            Upcoming.isSuccess &&
            Popular.isSuccess && (
              <VStack bg="white" spacing="14px">
                <SecondList
                  title="Top Rated Movies"
                  data={TopRated.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
                <SecondList
                  title="Now Playing Movies"
                  data={NowPlaying.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
                <SecondList
                  title="Popular Movies"
                  data={Popular.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
              </VStack>
            )}
          {browse === "now-playing" &&
            TopRated.isSuccess &&
            NowPlaying.isSuccess &&
            Upcoming.isSuccess &&
            Popular.isSuccess && (
              <VStack bg="white" spacing="14px">
                <SecondList
                  title="Top Rated Movies"
                  data={TopRated.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
                <SecondList
                  title="Popular Movies"
                  data={Popular.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
                <SecondList
                  title="Upcoming Movies"
                  data={Upcoming.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
              </VStack>
            )}
        </VStack>
      </VStack>
      <Footer />
    </Box>
  );
}
