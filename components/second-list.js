/* eslint-disable react/jsx-key */
import React from "react";
import { Box, HStack, VStack, Image, Center } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function SecondList() {
  return (
    <Box>
      <HStack align="end" spacing="0px">
        <Center color="orange" px="2" height="52" bg="white">
          <ChevronLeftIcon fontSize="28px" />
        </Center>
        <Box>
          <VStack align="left" spacing="14px">
            <Box as="h2" color="orange" fontWeight="bold" fontSize="xl">
              Most Popular Kids Movies
            </Box>
            <HStack
              spacing="8px"
              shouldWrapChildren
              overflow="-moz-hidden-unscrollable"
            >
              {[...Array(20)].map(() => (
                <Box>
                  <Image
                    src="https://image.tmdb.org/t/p/original/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg"
                    alt="Segun Adebayo"
                    w="52"
                    h="48"
                    objectFit="cover"
                  />
                </Box>
              ))}
            </HStack>
          </VStack>
        </Box>
        <Center color="black" px="2" height="52" bg="white">
          <ChevronRightIcon fontSize="28px" color="orange" />
        </Center>
      </HStack>
    </Box>
  );
}

export default SecondList;
