import styled from "styled-components";
import { Section } from "../../../styles/global-styles";
import { StyleConstants } from "../../../styles/StyleConstants";
import { Letter } from "../../components/Letter";

export const AboutSection = styled(Section)`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    flex-direction: row;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    padding-top: 0;
  }
`

export const AboutContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 10rem 15rem 8rem;
`

export const AboutTitle = styled.h1`
  font-size: 4rem;
  color: ${props => props.theme.text};
  margin-bottom: 4rem;

  &::before {
    content: '';
    display: block;
    height: 2px;
    width: 25%;
    margin: 1rem auto;
    background: ${props => props.theme.primary}
  }

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    font-size: 4rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    font-size: 5.5rem;
  }
`

export const AboutLetter = styled.div`
  font-size: 8rem;
  font-family: 'Big Shoulders Stencil Text';
  margin-bottom: 4rem;
  color: ${props => props.theme.bgVariant};
  cursor: default;

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    font-size: 10rem;
  }
`

export const AboutText = styled.div`
  font-size: 1.5rem;
  line-height: 160%;
  margin: 0 auto;
  max-width: 70ch;
  font-family: 'Big Shoulders Stencil Text';
  color: ${props => props.theme.textAlt2};
  padding: 3rem 2rem;
  cursor: default;
  border: solid 1px ${props => props.theme.textAlt1};
  clip-path: polygon(0 0, 70% 0, 100% 5%, 100% 100%, 5% 100%, 0 70%);

  &:hover {
    color: ${props => props.theme.text};
  }

  @media screen and (min-width: ${StyleConstants.MOBILE_M}) {
    font-size: 2rem;
    padding: 4rem;
  }
  
  @media screen and (min-width: ${StyleConstants.TABLET}) {
    font-size: 2.5rem;
    padding: 6rem 4rem;
    margin: 6rem auto;
  }
`

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media screen and (min-width: ${StyleConstants.MOBILE_L}) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  
  @media screen and (min-width: ${StyleConstants.TABLET}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    gap: 4rem;
  }
`