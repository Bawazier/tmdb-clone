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
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";

function VideosItem({title, data, onOpen}) {
  const [next, setNext] = useState(0);
  return (
    <Box bg="transparent" zIndex={2} display="flex" justifyContent="left" minHeight="100vh">
      <HStack align="center" spacing="0px">
        <Center
          as="button"
          color="orange"
          px="2"
          height="80"
          bg="trasnparent"
          onClick={() => setNext(next - 3)}
          opacity={next < 1 ? "0%" : "100%"}
          disabled={next < 1 ? true : false}
        >
          <ChevronLeftIcon fontSize="24px" />
        </Center>
        <Box maxW="container.xl">
          <VStack align="left" spacing="20px">
            <HStack
              spacing="18px"
              divider={<StackDivider borderColor="black" />}
              align="left"
            >
              <Text fontSize="3xl" fontWeight="bold" color="black">
                Videos
              </Text>
              <Text fontSize="3xl" color="orange">
                {title}
              </Text>
            </HStack>
            <HStack
              spacing="12px"
              shouldWrapChildren
              overflow="-moz-hidden-unscrollable"
            >
              {data.map(
                (item, index) =>
                  index >= next && (
                    <VStack align="left" width="md">
                      <Box display="flex" alignItems="end" position="relative">
                        <Circle
                          as="button"
                          size="52px"
                          bg="orange"
                          color="white"
                          position="absolute"
                          ml="4"
                          mb="4"
                          onClick={() => onOpen(item.key, item.name)}
                        >
                          <ExternalLinkIcon fontSize="24px" />
                        </Circle>
                        <Image
                          src={`https://i.ytimg.com/vi/${item.key}/hqdefault.jpg`}
                          alt=""
                          width="md"
                          height="60"
                        />
                      </Box>
                      <Text fontSize="md" fontWeight="bold" color="orange" isTruncated>
                        {item.name} ({item.type})
                      </Text>
                    </VStack>
                  )
              )}
            </HStack>
          </VStack>
        </Box>
        <Center
          as="button"
          color="black"
          px="2"
          height="80"
          bg="trasnparent"
          onClick={() => setNext(next + 3)}
          opacity={next > 3 ? "0%" : "100%"}
          disabled={next > 3 ? true : false}
        >
          <ChevronRightIcon fontSize="18px" color="orange" />
        </Center>
      </HStack>
    </Box>
  );
}

export default VideosItem;
