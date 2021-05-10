/* eslint-disable react/prop-types */
import React from "react";
import {
  HStack,
  VStack,
  Box,
  Image,
  Text,
  Badge,
  StackDivider,
} from "@chakra-ui/react";

function DetailItem({
  title,
  adult,
  backdrop_path,
  genres,
  status,
  overview,
  release_date,
  cast,
  crew,
}) {
  const URL_IMAGE = process.env.NEXT_PUBLIC_API_URL_IMAGE;
  return (
    <HStack spacing="0px" position="relative" bg="white" minHeight="100vh">
      <Box
        display="flex"
        alignItems="center"
        bgGradient="transparent"
        w="full"
        h="full"
        position="absolute"
        pl="9"
      >
        <VStack spacing="18px" align="left" w="xl">
          <Text
            fontSize="5xl"
            fontFamily="sans-serif"
            fontWeight="extrabold"
            color="white"
          >
            {title}
          </Text>
          <HStack
            spacing="10px"
            divider={
              <StackDivider borderColor="lightblack" fontWeight="bold" />
            }
            align="stretch"
          >
            <Text fontSize="sm" color="lightblack" fontWeight="bold">
              {release_date}
            </Text>
            <Badge
              variant="outline"
              fontSize="sm"
              colorScheme="lightblack"
              fontWeight="bold"
            >
              {adult ? "RBO" : "R"}
            </Badge>
            <Text fontSize="sm" color="lightblack" fontWeight="bold">
              {status}
            </Text>
            <Text fontSize="sm" color="lightblack" fontWeight="bold">
              {genres.map((item, index) => index < 3 && item.name + "\t")}
            </Text>
          </HStack>
          <Text fontSize="md" color="white">
            {overview}
          </Text>
          <VStack align="left" spacing="1.5">
            <HStack>
              <Text fontSize="sm" color="lightblack" fontWeight="bold">
                Crew:
              </Text>
              {crew.map(
                (item, index) =>
                  index < 3 && (
                    <Text fontSize="sm" color="white" key={item.id}>
                      {item.name},
                    </Text>
                  )
              )}
            </HStack>
            <HStack>
              <Text fontSize="sm" color="lightblack" fontWeight="bold">
                Cast:
              </Text>
              {cast.map(
                (item, index) =>
                  index < 3 && (
                    <Text fontSize="sm" color="white" key={item.id}>
                      {item.name},
                    </Text>
                  )
              )}
            </HStack>
          </VStack>
        </VStack>
      </Box>
      <Box w="full" display="flex" justifyContent="end">
        <Image
          src={URL_IMAGE + "/original" + backdrop_path}
          alt=""
          w="full"
          h="100vh"
        />
      </Box>
    </HStack>
  );
}

export default DetailItem;
