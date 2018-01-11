import styled from 'styled-components';
import image from './image.jpg';

export const Background = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center center;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  position: relative;

  ::after {
    content: '';
    width: 1px;
    height: 100px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -50px;
    z-index: 1;
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Numbers = styled.p``;

export const Texts = styled.p``;
