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

function ModalVideo({ isOpen, onClose, keyVideo, name }) {
  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
    >
      <ModalOverlay />
      <ModalContent bg="transparent">
        <ModalHeader>{name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AspectRatio w="full" h="450" ratio={1}>
            <iframe
              title="naruto"
              src={`https://www.youtube.com/embed/${keyVideo}`}
              allowFullScreen
            />
          </AspectRatio>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalVideo;
