import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalContent,
  CloseBtn,
  Iframe
} from './styles';

export const Video = ({ isShow = true }) => {
  return (
    <Modal isShow={isShow}>
      <ModalContent>
        <ModalHeader>
          <CloseBtn>&times;</CloseBtn>
        </ModalHeader>
        <ModalBody>
          <Iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/HCjNJDNzw8Y"
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
