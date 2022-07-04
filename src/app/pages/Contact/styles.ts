import styled from "styled-components";
import { Section } from "../../../styles/global-styles";
import { StyleConstants } from "../../../styles/StyleConstants";

export const ContactSection = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  height: 100%;

  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP_L}) {
    gap: 8rem;
  }
`

export const ContactText = styled.h1`
  font-family: 'Big Shoulders Stencil Text';
  font-size: 4rem;
  text-transform: capitalize;
  text-align: center;
  align-self: center;
  color: ${({ theme }) => theme.text };

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    font-size: 6rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    font-size: 6.2rem;
  }

  @media screen and (min-width: ${StyleConstants.LAPTOP_L}) {
    font-size: 8rem;
  }
`