import styled from '@emotion/styled';

interface Props {}
const Card = styled.div<Props>`
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  background-color: white;
  padding: 24px;
  border: 1px solid #e1e2f0;
`;

export default Card;