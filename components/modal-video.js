/* eslint-disable react/prop-types */
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  AspectRatio,
} from "@chakra-ui/react";

function ModalVideo({isOpen, onClose}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent bg="orange">
        <ModalHeader>Mortal Kombat: Trailer 1</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AspectRatio w="full" h="350" ratio={1}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              allowFullScreen
            />
          </AspectRatio>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalVideo;
