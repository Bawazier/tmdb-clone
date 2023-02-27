import React from "react";
import { Box, VStack, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";

function PersonItem(): JSX.Element {
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
                width={1080}
                height={850}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
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
