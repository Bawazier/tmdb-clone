/* eslint-disable react/prop-types */
import React from "react";
import {
  HStack,
  VStack,
  Box,
  Image,
  Text,
  Badge,
  StackDivider,
} from "@chakra-ui/react";

function DetailItem() {
  const URL_IMAGE = process.env.NEXT_PUBLIC_API_URL_IMAGE;
  return (
    <HStack spacing="0px" position="relative" bg="black">
      <Box
        display="flex"
        alignItems="center"
        bgGradient="linear(to-r, #000000,transparent)"
        w="full"
        h="full"
        position="absolute"
        pl="10"
      >
        <VStack spacing="18px" align="left" w="xl">
          <Text
            fontSize="5xl"
            fontFamily="sans-serif"
            fontWeight="extrabold"
            color="white"
          >
            Mortal Kombat
          </Text>
          <HStack
            spacing="10px"
            divider={<StackDivider borderColor="lightblack" />}
            align="stretch"
          >
            <Text fontSize="sm" color="lightblack">
              2021
            </Text>
            <Badge variant="outline" fontSize="sm" colorScheme="lightblack">
              18+
            </Badge>
            <Text fontSize="sm" color="lightblack">
              Released
            </Text>
            <Text fontSize="sm" color="lightblack">
              Get over here.
            </Text>
          </HStack>
          <Text fontSize="md" color="white">
            Washed-up MMA fighter Cole Young, unaware of his heritage, and
            hunted by Emperor Shang Tsung&apos;s best warrior, Sub-Zero, seeks
            out and trains with Earth&apos;s greatest champions as he prepares
            to stand against the enemies of Outworld in a high stakes battle for
            the universe.
          </Text>
          <HStack>
            <Text fontSize="sm" color="lightblack">
              Cast:
            </Text>
            <Text fontSize="sm" color="white">
              Charlie Cox,
            </Text>
            <Text fontSize="sm" color="white">
              Deborah Ann Woll,
            </Text>
            <Text fontSize="sm" color="white">
              Elden Henson
            </Text>
          </HStack>
          <HStack>
            <Text fontSize="sm" color="lightblack">
              Crew:
            </Text>
            <Text fontSize="sm" color="white">
              Charlie Cox,
            </Text>
            <Text fontSize="sm" color="white">
              Deborah Ann Woll,
            </Text>
            <Text fontSize="sm" color="white">
              Elden Henson
            </Text>
          </HStack>
        </VStack>
      </Box>
      <Box w="full" display="flex" justifyContent="end">
        <Image
          src={URL_IMAGE + "/original" + "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"}
          alt=""
          w="85%"
          h="100vh"
        />
      </Box>
    </HStack>
  );
}

export default DetailItem;
