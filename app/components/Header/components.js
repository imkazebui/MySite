import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  position: fixed;
  width: 100%;
`;

const A = styled.a`
  padding: 10px;
  color: white;
`;

const Logo = styled.a`
  padding: 10px 30px;
`;

export {
  Nav,
  A,
  Logo,
};
