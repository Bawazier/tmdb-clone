/* eslint-disable react/prop-types */
import React from "react";
import { SimpleGrid, VStack, HStack, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

function MoreDetail({ genres, status, cast, providers }) {
  return (
    <Box bg="transparent" display="flex" alignItems="center" minHeight="100vh">
      <VStack align="left" px="9">
        <Text fontSize="3xl" fontWeight="bold" color="black">
          More Details
        </Text>
        <SimpleGrid columns={3} spacing={10}>
          <VStack align="left" spacing="14px">
            <Text fontSize="sm" fontWeight="bold" color="lightblack">
              Genres
            </Text>
            <HStack wrap="wrap">
              {genres?.map((item) => (
                <Box as="button" key={item.id}>
                  <Text fontSize="sm" color="orange">
                    {item.name},
                  </Text>
                </Box>
              ))}
            </HStack>
          </VStack>
          <VStack align="left" spacing="14px">
            <Text fontSize="sm" fontWeight="bold" color="lightblack">
              Status
            </Text>
            <Text fontSize="sm" color="orange">
              {status}
            </Text>
          </VStack>
          <VStack align="left" spacing="14px">
            <Text fontSize="sm" fontWeight="bold" color="lightblack">
              Watch Providers
            </Text>
            <HStack spacing="24px" align="stretch" wrap="wrap">
              {providers?.buy &&
                providers?.buy.map((item) => (
                  <Box as="button" key={item.id}>
                    <Image
                      src={item.logo_path}
                      alt=""
                      width={40}
                      height={40}
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} />
                  </Box>
                ))}
              {providers?.rent &&
                providers?.rent.map((item) => (
                  <Box as="button" key={item.id}>
                    <Image
                      src={item.logo_path}
                      alt=""
                      width={40}
                      height={40}
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} />
                  </Box>
                ))}
              {providers?.flatrate &&
                providers?.flatrate.map((item) => (
                  <Box as="button" key={item.id}>
                    <Image
                      src={item.logo_path}
                      alt=""
                      width={40}
                      height={40}
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} />
                  </Box>
                ))}
            </HStack>
          </VStack>
        </SimpleGrid>
        <VStack align="left" spacing="14px">
          <Text fontSize="sm" fontWeight="bold" color="lightblack">
            Cast
          </Text>
          <SimpleGrid columns={3} spacing={2}>
            {cast?.map((item) => (
              <Box as="button" key={item.id} textAlign="left">
                <Text fontSize="sm" color="orange">
                  {item.name},
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
    </Box>
  );
}

export default MoreDetail;
