import styled from "styled-components";
import { StyleConstants } from "../../../../../styles/StyleConstants";

export const GalleryLayout = styled.div<{ grid?: boolean }>`
  display: grid;
  grid-template-columns: ${props => props.grid ? `1fr 1fr` : `1fr`};
  grid-auto-rows: minmax(8rem, 12rem);
  gap: 1rem;

  @media screen and (min-width: ${StyleConstants.MOBILE_L}) {
    grid-auto-rows: minmax(10rem, 15rem);
  }
  
  @media screen and (min-width: ${StyleConstants.TABLET}) {
    gap: 2rem;
    grid-template-columns: ${props => props.grid ? `repeat(3, 1fr)` : `1fr`};
    grid-auto-rows: minmax(15rem, 20rem);
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    grid-auto-rows: minmax(15rem, 22rem);
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP_L}) {
    grid-template-columns: ${props => props.grid ? `repeat(4, 1fr)` : `1fr`};
  }
`