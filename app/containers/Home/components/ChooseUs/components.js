import styled from 'styled-components';
import View from 'components/View';

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
  width: 20%;
  min-height: 250px;
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-around;
`;

export {
  SectionHeader,
  Line,
  H2,
  Card,
  Front,
  Back,
  CardContainer,
  SectionBody,
};
