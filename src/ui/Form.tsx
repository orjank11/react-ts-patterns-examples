import styled from '@emotion/styled';

interface Props {}
export const FormGroup = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 8px 16px;
  border: 1px solid #e1e2f0;
  border-radius: 3px;
  display: block;
`
