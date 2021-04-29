/* eslint-disable react/prop-types */
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

function SecondStep({ formik }) {
  return (
    <Box py="4">
      <Text fontSize="20" fontWeight="bold" my="4">
        Information B
      </Text>
      <VStack align="left" spacing="4">
        <FormControl id="selected" isRequired>
          <FormLabel>Have a Laptop / PC</FormLabel>
          <RadioGroup id="haveLaptop" name="haveLaptop">
            <HStack spacing="8">
              <Radio
                name="haveLaptop"
                onChange={formik.handleChange}
                value="Yes"
              >
                Yes
              </Radio>
              <Radio
                name="haveLaptop"
                onChange={formik.handleChange}
                value="No"
              >
                No
              </Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <FormControl id="address" isRequired>
          <FormLabel>Address</FormLabel>
          <Textarea
            id="address"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
        </FormControl>
        <FormControl id="mobile-number" isRequired>
          <FormLabel>Mobile number</FormLabel>
          <NumberInput value={formik.values.mobile}>
            <NumberInputField
              id="mobile"
              name="mobile"
              onChange={formik.handleChange}
            />
          </NumberInput>
        </FormControl>
      </VStack>
    </Box>
  );
}

export default SecondStep;
