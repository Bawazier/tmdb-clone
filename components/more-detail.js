import React from "react";
import { SimpleGrid, VStack, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";

function MoreDetail() {
  return (
    <VStack align="left" px="9">
      <Text fontSize="3xl" fontWeight="bold" color="orange">
        More Details
      </Text>
      <SimpleGrid columns={3} spacing={10}>
        <VStack align="left" spacing="14px">
          <Text fontSize="sm" color="lightblack">
            Genres
          </Text>
          <Text fontSize="sm" color="orange">
            Fantasy, Action, Adventure, Science Fiction, Thriller
          </Text>
        </VStack>
        <VStack align="left" spacing="14px">
          <Text fontSize="sm" color="lightblack">
            Status
          </Text>
          <Text fontSize="sm" color="orange">
            Released
          </Text>
        </VStack>
        <VStack align="left" spacing="14px">
          <Text fontSize="sm" color="lightblack">
            Production Companies
          </Text>
          <HStack spacing="32px" align="stretch">
            <Image
              src="/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png"
              alt=""
              width="40px"
              height="40px"
            />
            <Image
              src="/wChlWsVgwSd4ZWxTIm8PTEcaESz.png"
              alt=""
              width="40px"
              height="40px"
            />
            <Image
              src="/f8NwLg72BByt3eav7lX1lcJfe60.png"
              alt=""
              width="40px"
              height="40px"
            />
            <Image
              src="/iaYpEp3LQmb8AfAtmTvpqd4149c.png"
              alt=""
              width="40px"
              height="40px"
            />
            <Image
              src="/vxOhCbpsRBh10m6LZ3HyImTYpPY.png"
              alt=""
              width="40px"
              height="40px"
            />
          </HStack>
        </VStack>
      </SimpleGrid>
    </VStack>
  );
}

export default MoreDetail;
