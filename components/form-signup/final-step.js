import React from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";

function FinalStep() {
  return (
    <Box py="4">
      <Text fontSize="20" fontWeight="bold" my="4">
        Confirmation data of entry
      </Text>
      <VStack align="left" spacing="4">
        <HStack>
          <Text fontWeight="bold">Fullname:</Text>
          <Text>Fullname</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Jobdesc:</Text>
          <Text>Fullname</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Gender:</Text>
          <Text>Fullname</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">E-mail:</Text>
          <Text>Fullname</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Have a Laptop/PC:</Text>
          <Text>Fullname</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Mobile number:</Text>
          <Text>Fullname</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Address:</Text>
          <Text>Fullname</Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default FinalStep;
