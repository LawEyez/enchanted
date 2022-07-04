import styled from "styled-components";
import { SectionTitle } from "../../../styles/global-styles";
import { StyleConstants } from "../../../styles/StyleConstants";

export const CollectionTitle = styled(SectionTitle)`
  margin-top: 2rem;

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    margin-top: 4rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    margin-top: 8rem;
  }
`

export const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 20rem;
  gap: 1rem;

  @media screen and (min-width: ${StyleConstants.MOBILE_M}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (min-width: ${StyleConstants.TABLET}) {
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const CollectionImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 1.5rem;
  cursor: pointer;
`