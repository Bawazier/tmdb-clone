/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Box, HStack, VStack, Center } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";


function SecondList({title, data}) {
  const [next, setNext] = useState(0);
  return (
    <Box bg="transparent" zIndex={2} display="flex" justifyContent="left">
      <HStack align="end" spacing="0px">
        <Center
          as="button"
          color="orange"
          px="2"
          height="36"
          bg="transparent"
          onClick={() => setNext(next - 5)}
          opacity={next < 1 ? "0%" : "100%"}
          disabled={next < 1 ? true : false}
        >
          <ChevronLeftIcon fontSize="28px" />
        </Center>
        <Box>
          <VStack align="left" spacing="14px">
            <Box as="h2" color="orange" fontWeight="bold" fontSize="xl">
              {title}
            </Box>
            <HStack
              spacing="12px"
              shouldWrapChildren
              overflow="-moz-hidden-unscrollable"
            >
              {data.map((item, index) => {
                if (index >= next) {
                  return (
                    <Box as="button">
                      <Image
                        src={item.backdrop_path}
                        alt=""
                        width={240}
                        height="auto"
                      />
                    </Box>
                  );
                }
              })}
            </HStack>
          </VStack>
        </Box>
        <Center
          as="button"
          color="black"
          px="2"
          height="36"
          bg="transparent"
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

export default SecondList;
