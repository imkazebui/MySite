import styled from 'styled-components';

const ViewSlider = styled.div`
  background: ${({ background }) => `url(${background}) no-repeat center top`};
  background-size: cover;
  height: -webkit-fill-available;
`;

export {
  ViewSlider,
};
