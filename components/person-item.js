/* eslint-disable react/jsx-key */
import React from "react";
import { Box, HStack, VStack, SimpleGrid, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";

function PersonItem() {
  return (
    <Box bg="transparent" zIndex={2} display="flex" justifyContent="left">
      <VStack>
        <Text>Popular People</Text>
        <SimpleGrid columns={5} spacing={10}>
          {[...Array(10)].map(() => (
            <Box>
              <Image
                src="/z3sLuRKP7hQVrvSTsqdLjGSldwG.jpg"
                alt=""
                width="1080px"
                height="850px"
              />
              <VStack align="left" spacing="10px">
                <Text fontSize="md" fontWeight="bold" color="orange">
                  Keanu Reeves
                </Text>
                <Text fontSize="md" color="lightblack" isTruncated>
                  After being declared dead 15 years earlier, Danny Rand returns
                  to New York. But his welcome is a far cry from what hed hoped.
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

export default PersonItem;
