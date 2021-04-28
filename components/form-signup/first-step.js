/* eslint-disable react/jsx-key */
import React from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
  Square,
  Select,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

function FirstStep() {
  const [jobValue, setJobValue] = React.useState([]);

  const handleAddJobdesc = () => {
    setJobValue([...jobValue, "Value Job"]);
  };

  const handleDeleteJobdesc = () => {
    setJobValue([]);
  };

  return (
    <Box py="4">
      <Text fontSize="20" fontWeight="bold" my="4">
        Information A
      </Text>
      <VStack align="left" spacing="4">
        <HStack>
          <FormControl id="first-name" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="last-name" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
        <FormControl id="jobdesc" isRequired>
          <FormLabel>Jobdesc</FormLabel>
          <HStack>
            <Input type="text" />
            <Square as="button" onClick={handleAddJobdesc}>
              <AddIcon fontSize="28" fontWeight="extrabold" />
            </Square>
          </HStack>
          <VStack align="left" spacing="2" mt="2">
            {jobValue.map((item) => (
              <HStack>
                <Input type="text" isReadOnly value={item} />
                <Square as="button" onClick={handleDeleteJobdesc}>
                  <CloseIcon fontSize="18" fontWeight="extrabold" />
                </Square>
              </HStack>
            ))}
          </VStack>
        </FormControl>
        <FormControl id="gender" isRequired>
          <FormLabel>Gender</FormLabel>
          <Select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input type="email" />
        </FormControl>
      </VStack>
    </Box>
  );
}

export default FirstStep;
