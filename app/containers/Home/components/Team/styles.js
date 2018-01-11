import styled from 'styled-components';

const Container = styled.div`
  width: ${({ width }) => `${width}px`};
  padding: 0px 15px;
  &:hover {
    > div:first-child > div {
      opacity: 1;
      filter: alpha(opacity=100);
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }

    > div:first-child::after {
      opacity: 1;
      filter: alpha(opacity=100);
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }
`;

const ContainerBody = styled.div`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    z-index: 1;
    -webkit-transition: all 0.45s;
    -o-transition: all 0.45s;
    transition: all 0.45s;
    -moz-transition: all 0.45s;
    -ms-transition: all 0.45s;
  }
`;

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

const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
  z-index: 9;
  -webkit-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
  -moz-transition: all 0.35s;
  -ms-transition: all 0.35s;
`;

const Social = styled.div`
  margin-top: 10px;
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;

  > a {
    text-decoration: none;
    -webkit-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -ms-transition: all 0.5s ease 0s;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #3b5998;
  }

  > a:nth-child(2) {
    background: #d34836;
  }

  > a:nth-child(3) {
    background: #c92228;
  }

  > a:nth-child(4) {
    background: #4099ff;
  }

  > a:hover {
    opacity: 0.5;
  }
`;

export {
  Container,
  ContainerBody,
  Image,
  Social,
  SectionBody,
  Name,
  Position,
  OverLay,
};
