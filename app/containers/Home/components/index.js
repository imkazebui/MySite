import styled, { keyframes } from 'styled-components';

const ViewSlider = styled.div`
  background: ${({ background }) => `url(${background}) no-repeat center top`};
  background-size: cover;
  height: -webkit-fill-available;
`;

const BtnChangeSlide = styled.div`
  display: inline-block;
  padding: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  top: 50%;
  position: absolute;
  margin-left: ${({ left }) => left ? '20px' : 0};
  margin-right: ${({ right }) => right ? '20px' : 0};
  right: ${({ right }) => right ? 0 : 'auto'};

  &:hover {
    cursor: pointer;
  }

  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  overflow: hidden;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 100%;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  &:hover, &:focus, &:active {
    color: white;
  }
  &:hover:before, &:focus:before {
    -webkit-transform: scale(2);
    transform: scale(2);
  }
  &:active {
    transform: scale(0.8);
  }
`;

const ViewSlideDescribe = styled.div`
  position: relative;
  top: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const transformTopToBot = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SlideTitle = styled.h1`
  text-transform: uppercase;
  font-size: 3em;
  margin: 0;
  letter-spacing: 1px;

  animation: ${transformTopToBot} 0.4s linear 1;

`;

const SlideDescribe = styled.p`
  animation: ${transformTopToBot} 0.3s linear 0.5s 1;
  animation-fill-mode: both;
`;

const SlideBtn = styled.div`
  animation: ${transformTopToBot} 0.3s linear 1s 1;
  animation-fill-mode: both;
`;

export {
  ViewSlider,
  BtnChangeSlide,
  ViewSlideDescribe,
  SlideTitle,
  SlideDescribe,
  SlideBtn,
};
