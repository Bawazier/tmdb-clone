import React from "react";
import {
  details,
  videos,
  recommended,
  providers,
  credits,
  // episodes,
} from "../../../../libs/api/tv-shows";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { useRouter } from "next/router";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import DetailItem from "../../../../components/detail-item";
import VideosItem from "../../../../components/videos-item";
import MoreDetail from "../../../../components/more-detail";
import RecommendedList from "../../../../components/recommended-list";
import ModalVideo from "../../../../components/modal-video";
import { VStack, useDisclosure, Box } from "@chakra-ui/react";

export async function getServerSideProps({ params }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ["details-tv", params.id, params.language],
    () => details(params.id)
  );
  await queryClient.prefetchQuery(
    ["videos-tv", params.id, params.language],
    () => videos(params.id)
  );
  await queryClient.prefetchQuery(
    ["recommended-tv", params.id, params.language],
    () => recommended(params.id)
  );
  // await queryClient.prefetchQuery(
  //   ["similar-tv", params.id, params.language],
  //   () => similar(params.id)
  // );
  await queryClient.prefetchQuery(
    ["providers-tv", params.id, params.language],
    () => providers(params.id)
  );
  await queryClient.prefetchQuery(
    ["credits-tv", params.id, params.language],
    () => credits(params.id)
  );
  return {
    props: { dehydratedState: dehydrate(queryClient) }, // will be passed to the page component as props
  };
}

export default function Title() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [keyVideo, setKeyVideo] = React.useState("");
  const [nameVideo, setNameVideo] = React.useState("");
  const router = useRouter();
  const { language, id } = router.query;

  const handleModal = async (key, name) => {
    await setKeyVideo(key);
    await setNameVideo(name);
    await onOpen();
  };

  const option = {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 2,
  };
  const Details = useQuery(
    ["details-tv", id, language],
    () => details(id),
    option
  );
  const Videos = useQuery(
    ["videos-tv", id, language],
    () => videos(id),
    option
  );
  const Recommended = useQuery(
    ["recommended-tv", id, language],
    () => recommended(id),
    option
  );
  // const Similar = useQuery(
  //   ["similar-tv", id, language],
  //   () => similar(id),
  //   option
  // );
  const Providers = useQuery(
    ["providers-tv", id, language],
    () => providers(id),
    option
  );
  const Credits = useQuery(
    ["credits-tv", id, language],
    () => credits(id),
    option
  );

  return (
    <Box bg="white">
      <Header />
      <VStack align="left" bg="white" spacing="40px">
        {Details.isSuccess && Credits.isSuccess && (
          <DetailItem
            title={Details.data.name}
            adult={Details.data.adult}
            backdrop_path={Details.data.backdrop_path}
            genres={Details.data.genres}
            status={Details.data.status}
            overview={Details.data.overview}
            release_date={Details.data.first_air_date}
            cast={Credits.data.cast}
            crew={Credits.data.crew}
          />
        )}
        {Videos.isSuccess && (
          <VideosItem
            onOpen={(key, name) => handleModal(key, name)}
            data={Videos.data}
            title={Details.data.name}
          />
        )}
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
          key={keyVideo || ""}
          name={nameVideo}
        />
      )}
      <Footer />
    </Box>
  );
}
