import React from "react";
import { SimpleGrid, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";

function RecommendedList() {
  return (
    <VStack align="left" px="9">
      <Text fontSize="3xl" fontWeight="bold" color="orange">
        More Similiar Movies
      </Text>
      <SimpleGrid columns={3} spacing={2}>
        <Image
          src="/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"
          alt=""
          width="150px"
          height="200px"
        />
        <Image
          src="/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"
          alt=""
          width="150px"
          height="200px"
        />
        <Image
          src="/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"
          alt=""
          width="150px"
          height="200px"
        />
        <Image
          src="/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"
          alt=""
          width="150px"
          height="200px"
        />
      </SimpleGrid>
    </VStack>
  );
}

export default RecommendedList;
