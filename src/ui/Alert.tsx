import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { VariantType } from '../types';

interface Props {
  variant: VariantType;
}
const Alert = styled.div<Props>`
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    position: relative;
    margin-bottom: 1rem;
    padding: 0.75rem 1.25rem;
    border-radius: 0.25rem;

    ${props => props.variant === 'danger' && css`
      color: rgb(114, 27, 35);
      background-color: rgb(248, 214, 217);
      border-color: rgb(245, 198, 202);
    `}
    ${props => props.variant === 'info' && css`
      color: rgb(11, 84, 95);
      background-color: rgb(208, 236, 240);
      border-color: rgb(190, 228, 235);
    `}
    ${props => props.variant === 'success' && css`
      color: rgb(20, 86, 35);
      background-color: rgb(212, 237, 217);
      border-color: rgb(194, 230, 202);
    `}
    ${props => props.variant === 'warning' && css`
      color: rgb(132, 100, 3);
      background-color: rgb(255, 242, 205);
      border-color: rgb(255, 237, 185);
    `}
`

export default Alert;