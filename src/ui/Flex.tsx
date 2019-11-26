import styled from "@emotion/styled";
import css from "@emotion/css";

import {
  FlexDirectionProperty,
  JustifyContentProperty,
  AlignItemsProperty,
  AlignSelfProperty,
  JustifySelfProperty
} from "csstype";

interface Props {
  alignItems?: AlignItemsProperty;
  flexDirection?: FlexDirectionProperty;
  justifyContent?: JustifyContentProperty;
}

export const Flex = styled.div<Props>`
  display: flex;
  ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
  ${props =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}
  ${props =>
    props.flexDirection &&
    css`
      flex-direction: ${props.flexDirection};
    `}
`;

export const CmsFlex = styled.div<{}>`
  display: flex;
  max-width: 992px;
  width: 100%;
  margin: 64px auto;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    max-width: 448px;
    > div {
      padding: 16px 0;
    }
  }
`;

export const Column = styled.div<{ flex?: number }>`
  /* flex: 1; */
  flex: 1;
  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}
`;

interface ISelf {
  flex?: number;
  alignSelf?: AlignSelfProperty;
  justifySelf?: JustifySelfProperty;
}
export const Self = styled.div<ISelf>`
  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}
  ${props =>
    props.alignSelf &&
    css`
      align-self: ${props.alignSelf};
    `}
  ${props =>
    props.justifySelf &&
    css`
      justify-self: ${props.justifySelf};
    `}
`;