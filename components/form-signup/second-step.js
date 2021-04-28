import React from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
  Textarea,
  NumberInput,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  NumberInputField,
} from "@chakra-ui/react";

function SecondStep() {
  return (
    <Box py="4">
      <Text fontSize="20" fontWeight="bold" my="4">
        Information B
      </Text>
      <VStack align="left" spacing="4">
        <FormControl id="selected" isRequired>
          <FormLabel>Have a Laptop / PC</FormLabel>
          <RadioGroup>
            <HStack spacing="8">
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <FormControl id="address" isRequired>
          <FormLabel>Address</FormLabel>
          <Textarea />
        </FormControl>
        <FormControl id="mobile-number" isRequired>
          <FormLabel>Mobile number</FormLabel>
          <NumberInput>
            <NumberInputField />
          </NumberInput>
        </FormControl>
      </VStack>
    </Box>
  );
}

export default SecondStep;
