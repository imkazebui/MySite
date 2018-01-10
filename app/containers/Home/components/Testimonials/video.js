import React from 'react';
import PropTypes from 'prop-types';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalContent,
  CloseBtn,
  Iframe,
} from './styles';

export const Video = ({ isShow = false, toggle, src }) => (
  <Modal isShow={isShow}>
    <ModalContent>
      <ModalHeader>
        <CloseBtn onClick={toggle}>&times;</CloseBtn>
      </ModalHeader>
      <ModalBody>
        <Iframe
          width="100%"
          height="100%"
          src={src}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
        />
      </ModalBody>
    </ModalContent>
  </Modal>
);

Video.propTypes = {
  isShow: PropTypes.bool,
  toggle: PropTypes.func,
  src: PropTypes.string,
};
