import React from "react";
import { Box, Text, HStack, VStack } from "@chakra-ui/react";

interface Props {
  data: {
    firstName?: string;
    lastName?: string;
    jobdesc?: string[];
    gender?: string;
    email?: string;
    haveLaptop?: string;
    mobile?: string;
    address?: string;
  };
}

function FinalStep({ data }: Props): JSX.Element {
  return (
    <Box py="4">
      <Text fontSize="20" fontWeight="bold" my="4">
        Confirmation data of entry
      </Text>
      <VStack align="left" spacing="4">
        <HStack>
          <Text fontWeight="bold">Fullname:</Text>
          <Text>
            {data.firstName} {data.lastName}
          </Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Jobdesc:</Text>
          <Text>{data.jobdesc?.map((item) => item + ", ")}</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Gender:</Text>
          <Text>{data.gender}</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">E-mail:</Text>
          <Text>{data.email}</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Have a Laptop/PC:</Text>
          <Text>{data.haveLaptop}</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Mobile number:</Text>
          <Text>{data.mobile}</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Address:</Text>
          <Text>{data.address}</Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default FinalStep;
