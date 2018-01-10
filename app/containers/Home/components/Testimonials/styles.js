import styled from 'styled-components';

const Modal = styled.div`
  display: ${({ isShow }) => (isShow ? 'flex' : 'none')};
  position: fixed; /* Stay in place */
  z-index: 99999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
`;

const ModalContent = styled.div`
  position: relative;
  margin: auto;
  padding: 0;
  width: 900px;
`;

const ModalHeader = styled.div`
  padding: 2px 16px;
  height: 46px;
`;

const ModalBody = styled.div`
  padding: 2px 16px;
  height: 500px;
`;

const CloseBtn = styled.span`
  color: rgba(221, 221, 221, 0.4);
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Iframe = styled.iframe`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  background: #000;
`;

export { Modal, ModalBody, ModalHeader, ModalContent, CloseBtn, Iframe };
