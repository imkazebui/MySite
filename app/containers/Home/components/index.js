import styled from 'styled-components';

const ViewSlider = styled.div`
  background: ${({ background }) => `url(${background}) no-repeat center top`};
  background-size: cover;
  height: -webkit-fill-available;
`;

const BtnSlide = styled.div`
  display: inline-block;
  padding: 10px;
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  top: 50%;
  position: absolute;
  margin-left: ${({ left }) => left ? '20px' : 0};
  margin-right: ${({ right }) => right ? '20px' : 0};
  right: ${({ right }) => right ? 0 : 'auto'};
`;

export {
  ViewSlider,
  BtnSlide,
};
