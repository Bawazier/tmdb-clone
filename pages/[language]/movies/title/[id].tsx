import React from "react";
import {
  details,
  videos,
  recommended,
  // similar,
  providers,
  credits,
} from "../../../../libs/api/movies";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import DetailItem from "../../../../components/DetailItem";
import VideosItem from "../../../../components/VideoItem";
import MoreDetail from "../../../../components/MoreDetail";
import RecommendedList from "../../../../components/RecommendedList";
import ModalVideo from "../../../../components/ModalVideo";
import { VStack, useDisclosure, Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const queryClient = new QueryClient();

  if (params?.id) {
    await queryClient.prefetchQuery(
      ["details-movies", params?.id, params?.language],
      () => details(Number(params.id))
    );
    await queryClient.prefetchQuery(
      ["videos-movies", params?.id, params?.language],
      () => videos(Number(params.id))
    );
    await queryClient.prefetchQuery(
      ["recommended-movies", params?.id, params?.language],
      () => recommended(Number(params.id))
    );
    // await queryClient.prefetchQuery(
    //   ["similar-movies", params.id, params.language],
    //   () => similar(Number(params.id))
    // );
    await queryClient.prefetchQuery(
      ["providers-movies", params?.id, params?.language],
      () => providers(Number(params.id))
    );
    await queryClient.prefetchQuery(
      ["credits-movies", params?.id, params?.language],
      () => credits(Number(params.id))
    );
  }

  return {
    props: { dehydratedState: dehydrate(queryClient) }, // will be passed to the page component as props
  };
};

export default function Title() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [keyVideo, setKeyVideo] = React.useState("");
  const [nameVideo, setNameVideo] = React.useState("");
  const router = useRouter();
  const { language, id } = router.query;

  const handleModal = async (key?: string, name?: string) => {
    setKeyVideo(key || "");
    setNameVideo(name || "");
    onOpen();
  };

  const option = {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 2,
  };
  const Details = useQuery(
    ["details-movies", id, language],
    () => details(Number(id)),
    option
  );
  const Videos = useQuery(
    ["videos-movies", id, language],
    () => videos(Number(id)),
    option
  );
  const Recommended = useQuery(
    ["recommended-movies", id, language],
    () => recommended(Number(id)),
    option
  );
  // const Similar = useQuery(
  //   ["similar-movies", id, language],
  //   () => similar(id),
  //   option
  // );
  const Providers = useQuery(
    ["providers-movies", id, language],
    () => providers(Number(id)),
    option
  );
  const Credits = useQuery(
    ["credits-movies", id, language],
    () => credits(Number(id)),
    option
  );

  return (
    <Box bg="white">
      <Header />

      <VStack maxW="full" align="left" bg="white" spacing="40px">
        {Details.isSuccess && Credits.isSuccess && (
          <DetailItem
            title={Details.data.title}
            adult={Details.data.adult}
            backdrop_path={Details.data.backdrop_path}
            genres={Details.data.genres}
            status={Details.data.status}
            overview={Details.data.overview}
            release_date={Details.data.release_date}
            cast={Credits.data.cast}
            crew={Credits.data.crew}
          />
        )}
        {Videos.isSuccess && Videos.data.length && (
          <Box maxW="full" bg="white">
            <VideosItem
              onOpen={(key, name) => handleModal(key?.toString(), name)}
              data={Videos.data}
              title={Details.data?.title}
            />
          </Box>
        )}
        {}
        {Details.isSuccess && Credits.isSuccess && Providers.isSuccess && (
          <MoreDetail
            genres={Details.data.genres}
            status={Details.data.status}
            cast={Credits.data.cast}
            providers={Providers.data.US}
          />
        )}
        {Recommended.isSuccess && (
          <RecommendedList
            data={Recommended.data}
            onOpen={(id) => router.push(`/${language}/movies/title/${id}`)}
          />
        )}
      </VStack>
      {keyVideo !== "" && (
        <ModalVideo
          isOpen={isOpen}
          onClose={onClose}
          keyVideo={keyVideo}
          name={nameVideo}
        />
      )}
      <Footer />
    </Box>
  );
}
