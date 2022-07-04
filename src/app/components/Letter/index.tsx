import styled from "styled-components";
import { StyleConstants } from "../../../styles/StyleConstants";

export const Letter = styled.p<{ space?: boolean }>`
  position: absolute;
  font-size: 8rem;
  color: ${props => props.theme.bgVariant};
  left: 50%;
  transform: translate(-50%, ${props => props.space && `-8rem`}) ;
  font-family: 'Big Shoulders Stencil Text';
  font-weight: 900;

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    font-size: 15rem;
  }

`