import styled, { keyframes } from 'styled-components';
import View from 'components/View';

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

const SectionHeader = styled(View)`
  align-items: center;
`;

const Line = styled.div`
  height: 2px;
  background-color: ${({ color }) => color || '#425CBB'};
  width: ${({ width }) => width || '5%'};
`;

const H2 = styled.h2`
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Card = styled.div`
  width: 100%;
  min-height: 250px;
  margin: 0 auto;
  transition: transform 1s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY( 180deg );
  }
`;

const Front = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  min-height: 250px;
  backface-visibility: hidden;
  text-align: center;
  position: relative;
  > img {
    max-width: 100%;
  }

  > h6 {
    font-weight: 600;
    font-size: 18px;
    color: #3d3d3d;
    letter-spacing: 0.5px;
    margin: 0.85em 0em 0em 0em;
  }

  > p {
    font-size: 14px;
    line-height: 1.8;
    color: #727272;
    font-weight: 400;
    margin-top: 0em;
  }

`;

const Back = styled.div`
  background-color: #425CBB;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY( 180deg );
  z-index: 3;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  padding: 0px 20px;
  color: white;
  > p { line-height: 1.8; }
`;

const CardContainer = styled.div`
  perspective: 800px;
  width: 23%;
  min-height: 250px;
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px 100px;
  justify-content: space-around;
  flex-wrap: ${({ wrap }) => wrap ? 'wrap' : 'inherit'};
`;

const Section = styled.section`
  background-color: ${({ color }) => color || 'inherit'};
`

export {
  ViewSlider,
  BtnChangeSlide,
  ViewSlideDescribe,
  SlideTitle,
  SlideDescribe,
  SlideBtn,
  SectionHeader,
  Line,
  H2,
  Card,
  Front,
  Back,
  CardContainer,
  SectionBody,
  Section,
};
