/* eslint-disable react/prop-types */
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

function FirstStep({formik}) {
  const [jobValue, setJobValue] = React.useState(formik.values.jobdesc);

  const handleAddJobdesc = () => {
    setJobValue([...jobValue, formik.values.jobdesc[jobValue.length]]);
  };

  const handleDeleteJobdesc = (index) => {
    console.log(index);
    setJobValue([...jobValue]);
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
            <Input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </FormControl>
          <FormControl id="last-name" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </FormControl>
        </HStack>
        <FormControl id="jobdesc" isRequired>
          <FormLabel>Jobdesc</FormLabel>
          <HStack>
            <Input
              id="jobdesc"
              name={`jobdesc[${jobValue.length}]`}
              type="text"
              onChange={formik.handleChange}
              value={formik.values.jobdesc[jobValue.length]}
            />
            <Square as="button" onClick={handleAddJobdesc}>
              <AddIcon fontSize="28" fontWeight="extrabold" />
            </Square>
          </HStack>
          <VStack align="left" spacing="2" mt="2">
            {jobValue.map((item, index) => (
              <HStack>
                <Input type="text" isReadOnly value={item} />
                <Square as="button" onClick={() => handleDeleteJobdesc(index)}>
                  <CloseIcon fontSize="18" fontWeight="extrabold" />
                </Square>
              </HStack>
            ))}
          </VStack>
        </FormControl>
        <FormControl id="gender" isRequired>
          <FormLabel>Gender</FormLabel>
          <Select
            id="gender"
            name="gender"
            onChange={formik.handleChange}
            value={formik.values.gender}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </FormControl>
      </VStack>
    </Box>
  );
}

export default FirstStep;
