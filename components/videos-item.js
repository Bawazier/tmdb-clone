/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import {
  Box,
  HStack,
  VStack,
  Center,
  Image,
  StackDivider,
  Text,
  Circle,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, ViewIcon } from "@chakra-ui/icons";

function VideosItem({onOpen}) {
  const [next, setNext] = useState(0);
  return (
    <Box bg="transparent" zIndex={2} display="flex" justifyContent="left">
      <HStack align="end" spacing="0px">
        <Center
          as="button"
          color="orange"
          px="2"
          height="80"
          bg="trasnparent"
          onClick={() => setNext(next - 5)}
          opacity={next < 1 ? "0%" : "100%"}
          disabled={next < 1 ? true : false}
        >
          <ChevronLeftIcon fontSize="28px" />
        </Center>
        <Box>
          <VStack align="left" spacing="20px">
            <HStack
              spacing="18px"
              divider={<StackDivider borderColor="orange" />}
              align="left"
            >
              <Text fontSize="3xl" fontWeight="bold" color="orange">
                Videos
              </Text>
              <Text fontSize="3xl" color="lightblack">
                Mortal Kombat
              </Text>
            </HStack>
            <HStack
              spacing="12px"
              shouldWrapChildren
              overflow="-moz-hidden-unscrollable"
            >
              {[...Array(10)].map(() => (
                <Box display="flex" alignItems="end" position="relative">
                  <Circle
                    as="button"
                    size="52px"
                    bg="orange"
                    color="white"
                    position="absolute"
                    ml="4"
                    mb="4"
                    onClick={onOpen}
                  >
                    <ViewIcon fontSize="24px" />
                  </Circle>
                  <Image
                    src="https://i.ytimg.com/vi/jBa_aHwCbC4/hqdefault.jpg"
                    alt=""
                    width="md"
                    height="80"
                  />
                </Box>
              ))}
            </HStack>
          </VStack>
        </Box>
        <Center
          as="button"
          color="black"
          px="2"
          height="80"
          bg="trasnparent"
          onClick={() => setNext(next + 5)}
          opacity={next > 10 ? "0%" : "100%"}
          disabled={next > 10 ? true : false}
        >
          <ChevronRightIcon fontSize="28px" color="orange" />
        </Center>
      </HStack>
    </Box>
  );
}

export default VideosItem;
