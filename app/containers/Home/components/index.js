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
  margin-left: ${({ left }) => (left ? '20px' : 0)};
  margin-right: ${({ right }) => (right ? '20px' : 0)};
  right: ${({ right }) => (right ? 0 : 'auto')};

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
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;

  &:before {
    content: '';
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
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  &:hover,
  &:focus,
  &:active {
    color: white;
  }
  &:hover:before,
  &:focus:before {
    -webkit-transform: scale(2);
    transform: scale(2);
  }
  &:active,
  &:active:before {
    transform: scale(0.75);
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

const SectionBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px 100px;
  justify-content: space-between;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'inherit')};
`;

const Section = styled.section`
  background-color: ${({ color }) => color || 'inherit'};
`;

const ItemTitle = styled.h6`
  font-weight: 600;
  font-size: 18px;
  color: #3d3d3d;
  letter-spacing: 0.5px;
  margin: 0.85em 0em 0em 0em;
`;

const ItemDescription = styled.p`
  font-size: 14px;
  line-height: 1.8;
  color: #727272;
  font-weight: 400;
  margin-top: 0em;
`;

const GreatePossibilitiesItem = styled.div`
  width: 30%;
`;

const ItemLeft = styled.div`
  float: left;
  height: 100%;
  margin-right: 15px;
`;

const GPItemTitle = ItemTitle.extend`
  margin: 0px;
`;

const SectionDescription = styled.p`
  max-width: 700px;
  text-align: center;
`;

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
  SectionBody,
  Section,
  GreatePossibilitiesItem,
  ItemTitle,
  ItemDescription,
  ItemLeft,
  GPItemTitle,
  SectionDescription,
};
