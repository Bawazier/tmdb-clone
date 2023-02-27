import React from "react";
import { Center } from "@chakra-ui/react";

function Footer(): JSX.Element {
  return (
    <Center
      bg="lightblack"
      mt="4"
      fontSize="lg"
      fontWeight="bold"
      h="30px"
      color="white"
    >
      bawazier &copy; 2021
    </Center>
  );
}

export default Footer;
