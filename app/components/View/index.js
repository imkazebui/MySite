import styled from 'styled-components';

const View = styled.div`
  display: flex;
  flex-direction: ${({ row }) => row ? 'row' : 'column'};
`;

export default View;
