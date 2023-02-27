import React from "react";
import { Box, Text } from "@chakra-ui/react";

function FinishStep(): JSX.Element {
  return (
    <Box
      w="full"
      h="85vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="4xl" fontWeight="bold">
        Thank you for submit form
      </Text>
    </Box>
  );
}

export default FinishStep;
