import styled from 'styled-components';
import image from './background.jpg';

export const Background = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center center;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
`;

export const ViewText = styled.div`
  display: flex;
  flex: 1;
  background-color: red;
`;

export const ViewImg = styled.div`
  display: flex;
  flex: 2;
  background-color: blue;
`;

export const Title = styled.div``;

export const Line = styled.div``;

export const Text = styled.div``;

export default {
  Background,
  ViewText,
  ViewImg,
  Title,
  Line,
  Text,
};
