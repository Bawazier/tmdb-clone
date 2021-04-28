/* eslint-disable react/prop-types */
import React from "react";
import { HStack, VStack, Box, Image, Text, Button } from "@chakra-ui/react";
import {
  ExternalLinkIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";

function MainItem({ title, overview, backdrop, onOpen }) {
  return (
    <HStack spacing="0px" position="relative">
      <Box
        display="flex"
        alignItems="center"
        bg="transparent"
        w="xl"
        h="full"
        position="absolute"
        pl={9}
      >
        <VStack align="left">
          <Text
            fontSize="5xl"
            fontFamily="sans-serif"
            fontWeight="extrabold"
            color="white"
          >
            {title}
          </Text>
          <HStack spacing="14px">
            <Button
              leftIcon={<ExternalLinkIcon color="white" />}
              bg="orange"
              color="white"
            >
              Play
            </Button>
            <Button
              leftIcon={<InfoOutlineIcon color="white" />}
              bg="lightblack"
              color="white"
              onClick={onOpen}
            >
              More Info
            </Button>
          </HStack>
          <Text fontSize="lg" color="white">
            {overview}
          </Text>
        </VStack>
      </Box>
      <Image src={backdrop} alt="" w="max" h="100vh" />
    </HStack>
  );
}

export default MainItem;
