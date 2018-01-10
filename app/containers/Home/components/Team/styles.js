import styled from 'styled-components';

const Container = styled.div`
  width: ${({ width }) => `${width}px`};
  padding: 0px 15px;
`;

const ContainerBody = styled.div``;

const ContainerFooter = styled.div``;

const Image = styled.img`
  width: 100%;
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px 32px;
  justify-content: space-between;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'inherit')};
`;

const Name = styled.div`
  font-weight: 600;
  color: #000;
  margin-top: 20px;
  line-height: 24px;
  font-size: 16px;
`;

const Position = styled.div`
  font-size: 12px;
  color: #999999;
`;

export {
  Container,
  ContainerBody,
  ContainerFooter,
  Image,
  SectionBody,
  Name,
  Position,
};
