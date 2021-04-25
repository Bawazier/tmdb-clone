import React from "react";
import { HStack, VStack, Box, Image, Text, Button } from "@chakra-ui/react";
import {
  ExternalLinkIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";

function MainItem() {
  return (
    <HStack spacing="0px" position="relative">
      <Box
        display="flex"
        alignItems="center"
        bg="transparent"
        w="xl"
        h="full"
        position="absolute"
        pl="10"
      >
        <VStack align="left">
          <Text
            fontSize="5xl"
            fontFamily="sans-serif"
            fontWeight="extrabold"
            color="white"
          >
            Godzilla vs. Kong
          </Text>
          <HStack spacing="14px">
            <Button
              leftIcon={<ExternalLinkIcon color="white"/>}
              bg="orange"
              color="white"
            >
              Play
            </Button>
            <Button
              leftIcon={<InfoOutlineIcon color="white"/>}
              bg="lightblack"
              color="white"
            >
              More Info
            </Button>
          </HStack>
          <Text fontSize="lg" color="white">
            In a time when monsters walk the Earth, humanity’s fight for its
            future sets Godzilla and Kong on a collision course that will see
            the two most powerful forces of nature on the planet collide in a
            spectacular battle for the ages.
          </Text>
        </VStack>
      </Box>
      <Image
        src="https://image.tmdb.org/t/p/original/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg"
        alt=""
        w="max"
        h="100vh"
      />
    </HStack>
  );
}

export default MainItem;
