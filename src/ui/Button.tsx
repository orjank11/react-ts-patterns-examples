import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { VariantType, IntentType } from '../types';

interface Props {
  variant?: VariantType;
  intent?: IntentType;
  type?: string;
}
const Button = styled.div<Props>`
    display: inline-block;
    z-index: 1;
    align-self: self-end;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    color: rgb(255, 255, 255);
    background-color: rgb(189, 73, 50);
    padding: 0.375rem 0.625rem;
    border-radius: 0.25rem;
    border-width: 0px;
    transition: color 300ms ease 0s, border-style, border-color, visibility, background, background-color, text-decoration, box-shadow, transform, opacity;
    text-decoration: none;

    &:focus, &:active {
      box-shadow: rgba(189, 73, 50, 0.25) 0px 0px 0px 0.25rem;
      outline: 0px;
      border-color: rgb(225, 155, 142);
    }

    ${props => props.intent === 'secondary' && css`
      color: rgb(114, 27, 35);
      background-color: rgb(248, 214, 217);
      border-color: rgb(245, 198, 202);
    `}
    ${props => props.intent === 'default' && css`
      color: rgb(11, 84, 95);
      background-color: rgb(208, 236, 240);
      border-color: rgb(190, 228, 235);
    `}
    ${props => props.intent === 'cda' && css`
      color: rgb(20, 86, 35);
      background-color: rgb(212, 237, 217);
      border-color: rgb(194, 230, 202);
    `}
    ${props => props.intent === 'primary' && css`
      color: rgb(255, 255, 255);
      background-color: rgb(189, 73, 50);
    `}
`

export default Button;