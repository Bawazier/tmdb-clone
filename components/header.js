import React from "react";
import {
  Box,
  Flex,
  Spacer,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import Link from "next/link";

function Header() {
  return (
    <Box
      bg="transparent"
      w="100%"
      px={9}
      py={2}
      color="black"
      zIndex="overlay"
      position="fixed"
    >
      <Flex alignItems="center">
        <HStack spacing="24px">
          <Box px="8" py="2" bg="orange" color="white">
            Logo
          </Box>
          <Menu isLazy>
            <MenuButton
              aria-label="Options"
              variant="outline"
              color="black"
              fontWeight="bold"
              _hover={{
                borderBottom: "1px",
                borderBottomColor: "orange",
                color: "orange",
              }}
            >
              Movies
            </MenuButton>
            <MenuList bg="white">
              <Link href="/en/movies/popular">
                <MenuItem>Popular</MenuItem>
              </Link>
              <Link href="/en/movies/top-rated">
                <MenuItem>Top Rated</MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <Menu isLazy>
            <MenuButton
              aria-label="Options"
              variant="outline"
              color="black"
              fontWeight="bold"
              _hover={{
                borderBottom: "1px",
                borderBottomColor: "orange",
                color: "orange",
              }}
            >
              Tv Shows
            </MenuButton>
            <MenuList bg="white">
              <MenuItem>Popular</MenuItem>
              <MenuItem>Top Rated</MenuItem>
            </MenuList>
          </Menu>
          <Menu isLazy>
            <MenuButton
              aria-label="Options"
              variant="outline"
              color="black"
              fontWeight="bold"
              _hover={{
                borderBottom: "1px",
                borderBottomColor: "orange",
                color: "orange",
              }}
            >
              People
            </MenuButton>
            <MenuList bg="white">
              <MenuItem>Popular</MenuItem>
              <MenuItem>Top Rated</MenuItem>
            </MenuList>
          </Menu>
          <Menu isLazy>
            <MenuButton
              aria-label="Options"
              variant="outline"
              color="black"
              fontWeight="bold"
              _hover={{
                borderBottom: "1px",
                borderBottomColor: "orange",
                color: "orange",
              }}
            >
              More
            </MenuButton>
            <MenuList bg="white">
              <MenuItem>Popular</MenuItem>
              <MenuItem>Top Rated</MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        <Spacer />
        <ButtonGroup variant="solid" spacing="6" size="sm">
          <Button bg="orange" color="white">
            JOIN NOW
          </Button>
          <Button border="1px" borderColor="black" color="black">
            SIGN IN
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default Header;
