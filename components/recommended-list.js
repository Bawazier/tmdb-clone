/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import { SimpleGrid, VStack, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

function RecommendedList({ data, onOpen }) {
  return (
    <VStack align="left" px="9">
      <Text fontSize="3xl" fontWeight="bold" color="black">
        Recommendations
      </Text>
      <SimpleGrid columns={3} spacing={2}>
        {data.map(
          (item, index) =>
            index < 12 &&
            item.backdrop_path && (
              <Box as="button" key={item.id} onClick={() => onOpen(item.id)}>
                <Image
                  src={item.backdrop_path}
                  alt=""
                  width={1080}
                  height={40}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Box>
            )
        )}
      </SimpleGrid>
    </VStack>
  );
}

export default RecommendedList;
