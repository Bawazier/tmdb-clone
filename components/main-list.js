/* eslint-disable react/jsx-key */
import React from "react";
import { Box, HStack, VStack, Image, Center } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function MainList() {
  return (
    <Box bg="transparent" zIndex={2}>
      <HStack align="end" spacing="0px">
        <Center as="button" color="orange" px="2" height="80" bg="trasnparent">
          <ChevronLeftIcon fontSize="28px" />
        </Center>
        <Box>
          <VStack align="left" spacing="14px">
            <Box as="h2" color="orange" fontWeight="bold" fontSize="xl">
              Popular Movies
            </Box>
            <HStack
              spacing="12px"
              shouldWrapChildren
              overflow="-moz-hidden-unscrollable"
            >
              {[...Array(20)].map(() => (
                <Box>
                  <Image
                    src="https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg"
                    alt="Segun Adebayo"
                    w="52"
                    h="80"
                    animation="ease-in"
                  />
                </Box>
              ))}
            </HStack>
          </VStack>
        </Box>
        <Center as="button" color="black" px="2" height="80" bg="trasnparent">
          <ChevronRightIcon fontSize="28px" color="orange" />
        </Center>
      </HStack>
    </Box>
  );
}

export default MainList;
