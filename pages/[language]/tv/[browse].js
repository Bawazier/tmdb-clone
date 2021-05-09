import React from "react";
// import Head from "next/head";
import {
  popular,
  top_rated,
  on_air,
  airing_today,
} from "../../../libs/api/tv-shows";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import MainList from "../../../components/main-list";
import SecondList from "../../../components/second-list";
import MainItem from "../../../components/main-item";
import { VStack, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["popular-tv", params.language], popular);
  await queryClient.prefetchQuery(
    ["top_rated-tv", params.language],
    top_rated
  );
  await queryClient.prefetchQuery(
    ["on_air-tv", params.language],
    on_air
  );
  await queryClient.prefetchQuery(
    ["airing_today-tv", params.language],
    airing_today
  );
  return {
    props: { dehydratedState: dehydrate(queryClient) }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { language: "en-US", browse: "popular" } },
      { params: { language: "en-US", browse: "airing-today" } },
      { params: { language: "en-US", browse: "on-tv" } },
      { params: { language: "en-US", browse: "top-rated" } },
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
  const Popular = useQuery(["popular-tv", language], popular, option);
  const TopRated = useQuery(["top_rated-tv", language], top_rated, option);
  const OnAir = useQuery(["on_air-tv", language], on_air, option);
  const AiringToday = useQuery(
    ["airing_today-tv", language],
    airing_today,
    option
  );
  return (
    <Box bg="white">
      <Header />
      <VStack spacing="-100px">
        {browse === "popular" && Popular.isSuccess && (
          <MainItem
            title={Popular.data[0]?.name}
            overview={Popular.data[0]?.overview}
            backdrop={URL_IMAGE + "/original" + Popular.data[0]?.backdrop_path}
            onOpen={() =>
              router.push(`/${language}/tv/title/${Popular.data[0]?.id}`)
            }
          />
        )}
        {browse === "top-rated" && TopRated.isSuccess && (
          <MainItem
            title={TopRated.data[0]?.name}
            overview={TopRated.data[0]?.overview}
            backdrop={URL_IMAGE + "/original" + TopRated.data[0]?.backdrop_path}
            onOpen={() =>
              router.push(`/${language}/tv/title/${TopRated.data[0]?.id}`)
            }
          />
        )}
        {browse === "on-tv" && OnAir.isSuccess && (
          <MainItem
            title={OnAir.data[0]?.name}
            overview={OnAir.data[0]?.overview}
            backdrop={URL_IMAGE + "/original" + OnAir.data[0]?.backdrop_path}
            onOpen={() =>
              router.push(`/${language}/tv/title/${OnAir.data[0]?.id}`)
            }
          />
        )}
        {browse === "airing-today" && AiringToday.isSuccess && (
          <MainItem
            title={AiringToday.data[0]?.name}
            overview={AiringToday.data[0]?.overview}
            backdrop={
              URL_IMAGE + "/original" + AiringToday.data[0]?.backdrop_path
            }
            onOpen={() =>
              router.push(`/${language}/tv/title/${AiringToday.data[0]?.id}`)
            }
          />
        )}
        <VStack maxW="full" bg="white" spacing="14px">
          {browse === "popular" && Popular.isSuccess && (
            <MainList
              title="Popular TV"
              data={Popular.data}
              onOpen={(id) => router.push(`/${language}/tv/title/${id}`)}
            />
          )}
          {browse === "top-rated" && TopRated.isSuccess && (
            <MainList
              title="Top Rated TV"
              data={TopRated.data}
              onOpen={(id) => router.push(`/${language}/tv/title/${id}`)}
            />
          )}
          {browse === "on-tv" && OnAir.isSuccess && (
            <MainList
              title="Now on TV"
              data={OnAir.data}
              onOpen={(id) => router.push(`/${language}/tv/title/${id}`)}
            />
          )}
          {browse === "airing-today" && AiringToday.isSuccess && (
            <MainList
              title="Airing Today"
              data={AiringToday.data}
              onOpen={(id) => router.push(`/${language}/tv/title/${id}`)}
            />
          )}

          {browse === "popular" &&
            TopRated.isSuccess &&
            OnAir.isSuccess &&
            AiringToday.isSuccess &&
            Popular.isSuccess && (
              <VStack bg="white" spacing="14px">
                <SecondList
                  title="Top Rated TV"
                  data={TopRated.data}
                  onOpen={(id) =>
                    router.push(`/${language}/tv/title/${id}`)
                  }
                />
                <SecondList
                  title="Now on TV"
                  data={OnAir.data}
                  onOpen={(id) =>
                    router.push(`/${language}/tv/title/${id}`)
                  }
                />
                <SecondList
                  title="Airing Today"
                  data={AiringToday.data}
                  onOpen={(id) =>
                    router.push(`/${language}/tv/title/${id}`)
                  }
                />
              </VStack>
            )}
          {browse === "top-rated" &&
            TopRated.isSuccess &&
            OnAir.isSuccess &&
            AiringToday.isSuccess &&
            Popular.isSuccess && (
              <VStack bg="white" spacing="14px">
                <SecondList
                  title="Popular TV"
                  data={Popular.data}
                  onOpen={(id) =>
                    router.push(`/${language}/tv/title/${id}`)
                  }
                />
                <SecondList
                  title="Now on TV"
                  data={OnAir.data}
                  onOpen={(id) =>
                    router.push(`/${language}/tv/title/${id}`)
                  }
                />
                <SecondList
                  title="Airing Today"
                  data={AiringToday.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
              </VStack>
            )}
          {browse === "on-tv" &&
            TopRated.isSuccess &&
            OnAir.isSuccess &&
            AiringToday.isSuccess &&
            Popular.isSuccess && (
              <VStack bg="white" spacing="14px">
                <SecondList
                  title="Top Rated TV"
                  data={TopRated.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
                <SecondList
                  title="Popular TV"
                  data={Popular.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
                <SecondList
                  title="Airing Today"
                  data={AiringToday.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
              </VStack>
            )}
          {browse === "airing-today" &&
            TopRated.isSuccess &&
            OnAir.isSuccess &&
            AiringToday.isSuccess &&
            Popular.isSuccess && (
              <VStack bg="white" spacing="14px">
                <SecondList
                  title="Top Rated TV"
                  data={TopRated.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
                <SecondList
                  title="Now on TV"
                  data={OnAir.data}
                  onOpen={(id) =>
                    router.push(`/${language}/movies/title/${id}`)
                  }
                />
                <SecondList
                  title="Popular TV"
                  data={Popular.data}
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
