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
  const [scroller, setScroller] = React.useState("transparent");
  const router = useRouter();

  const handleScroll = () => {
    if(window.pageYOffset > 0) {
      setScroller("white");
    }else{
      setScroller("transparent");
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      bg={scroller}
      w="100%"
      px={9}
      py={2}
      color="black"
      zIndex="overlay"
      position="fixed"
      boxShadow="lg"
      transition="ease-in"
      transitionDuration="0.5s"
    >
      <Flex alignItems="center">
        <HStack spacing="24px">
          <Box
            px="8"
            py="2"
            bg="orange"
            fontSize="md"
            fontWeight="extrabold"
            color="white"
            borderRadius="md"
          >
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
              <Link href="/en-US/movies/popular" legacyBehavior>
                <MenuItem>Popular</MenuItem>
              </Link>
              <Link href="/en-US/movies/now-playing" legacyBehavior>
                <MenuItem>Now Playing</MenuItem>
              </Link>
              <Link href="/en-US/movies/upcoming" legacyBehavior>
                <MenuItem>Upcoming</MenuItem>
              </Link>
              <Link href="/en-US/movies/top-rated" legacyBehavior>
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
              <Link href="/en-US/tv/popular" legacyBehavior>
                <MenuItem>Popular</MenuItem>
              </Link>
              <Link href="/en-US/tv/airing-today" legacyBehavior>
                <MenuItem>Airing Today</MenuItem>
              </Link>
              <Link href="/en-US/tv/on-tv" legacyBehavior>
                <MenuItem>On TV</MenuItem>
              </Link>
              <Link href="/en-US/tv/top-rated" legacyBehavior>
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
              <Link href="/en-US/person" legacyBehavior>
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
