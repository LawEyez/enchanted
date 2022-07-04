import styled from "styled-components";
import { SectionTitle } from "../../../styles/global-styles";
import { StyleConstants } from "../../../styles/StyleConstants";

export const ServicesTitle = styled(SectionTitle)`
  margin-top: 2rem;

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    margin-top: 4rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    margin-top: 8rem;
  }
`

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media screen and (min-width: ${StyleConstants.MOBILE_L}) {
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    gap: 2.5rem;
    grid-template-columns: repeat(3, 1fr);
  }
`