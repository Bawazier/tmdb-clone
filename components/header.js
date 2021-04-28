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
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
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
          <Box px="8" py="2" bg="orange" fontSize="md" fontWeight="extrabold" color="white" borderRadius="md">
            LOGO
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
              <Link href="/en-US/movies/popular">
                <MenuItem>Popular</MenuItem>
              </Link>
              <Link href="/en-US/movies/now-playing">
                <MenuItem>Now Playing</MenuItem>
              </Link>
              <Link href="/en-US/movies/upcoming">
                <MenuItem>Upcoming</MenuItem>
              </Link>
              <Link href="/en-US/movies/top-rated">
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
              <Link href="/en-US/tv/popular">
                <MenuItem>Popular</MenuItem>
              </Link>
              <Link href="/en-US/tv/airing-today">
                <MenuItem>Airing Today</MenuItem>
              </Link>
              <Link href="/en-US/tv/on-tv">
                <MenuItem>On TV</MenuItem>
              </Link>
              <Link href="/en-US/tv/top-rated">
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
              People
            </MenuButton>
            <MenuList bg="white">
              <Link href="/en-US/person/popular">
                <MenuItem>Popular</MenuItem>
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
              More
            </MenuButton>
            <MenuList bg="white">
              <MenuItem>About</MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        <Spacer />
        <ButtonGroup variant="solid" spacing="6" size="sm">
          <Button
            bg="orange"
            color="white"
            onClick={() => router.push("/en-US/join")}
          >
            JOIN NOW
          </Button>
          <Button
            border="1px"
            borderColor="black"
            color="black"
            onClick={() => router.push("/en-US/join")}
          >
            SIGN IN
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default Header;
