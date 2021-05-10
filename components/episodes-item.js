/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  SimpleGrid,
  StackDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Image from "next/image";

function EpisodesItem({title, seasons, onSelectSeasons, data}) {

  React.useEffect(() => {
    onSelectSeasons(seasons[seasons.length - 1].season_number);
  },[]);

  return (
    <Box
      px={9}
      bg="white"
      color="black"
      zIndex={2}
      display="flex"
      justifyContent="left"
      minHeight="100vh"
    >
      <VStack align="left" spacing="24px">
        <HStack
          spacing="18px"
          divider={<StackDivider borderColor="orange" />}
          align="left"
        >
          <Text fontSize="3xl" fontWeight="bold" color="black">
            Episodes
          </Text>
          <Text fontSize="3xl" color="orange">
            {title}
          </Text>
        </HStack>
        <Menu>
          <MenuButton
            as={Button}
            w="fit-content"
            rightIcon={<ChevronDownIcon />}
          >
            {seasons[seasons.length - 1].name}
          </MenuButton>
          <MenuList color="white">
            {seasons.map((item) => (
              <MenuItem onClick={() => onSelectSeasons(item.season_number)}>
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <VStack align="left" spacing="4px">
          <Text fontSize="md" fontWeight="bold" color="orange">
            Release year: {seasons[seasons.length - 1].air_date}
          </Text>
          <Text fontSize="md" color="lightblack">
            {seasons[seasons.length - 1].overview}
          </Text>
        </VStack>
        <SimpleGrid columns={3} spacing={2}>
          {data.isSuccess &&
            data.data &&
            data.data.map((item) => (
              <Box>
                {item.still_path ? (
                  <Image
                    src={item.still_path}
                    alt=""
                    width="1080px"
                    height="550px"
                  />
                ) : (
                  <Box width="full" height="220px" />
                )}
                <VStack align="left" spacing="10px">
                  <Text fontSize="md" fontWeight="bold" color="orange">
                    {item.episode_number}. {item.name}
                  </Text>
                  <Text fontSize="md" color="lightblack" noOfLines={3}>
                    {item.overview}
                  </Text>
                </VStack>
              </Box>
            ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

export default EpisodesItem;
