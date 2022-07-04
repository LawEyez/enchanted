import styled, { createGlobalStyle } from "styled-components";
import { StyleConstants } from "./StyleConstants";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: all .4s ease;
  }

  html {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 62.5%;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: .5rem;
    }

    &::-webkit-scrollbar-thumb {
      background: #ff6663;
    }
  }

  a {
    text-decoration: none;
  }

  input, button, textarea {
    font-family: inherit;
  }
`

export const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 6rem 1.5rem;
  background: ${props => props.theme.bg};
  
  @media screen and (min-width: ${StyleConstants.TABLET}) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    padding: 4rem 0;
  }
`

export const CustomSection = styled(Section)`
  height: max-content;
  min-height: max-content;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  

  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    width: 80%;
  }
`

export const TopLeft = styled.div`
  position: fixed;
  top: 2rem;
  left: 1.5rem;
  z-index: 50;

  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    top: 2.5rem;
    left: 4rem;
  }
`

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.text};
  display: flex;
  align-items: center;
  width: max-content;
  font-family: 'Big Shoulders Stencil Text';

  &::after {
    content: '';
    display: block;
    margin-left: 2rem;
    width: 10rem;
    height: 1px;
    background: ${props => props.theme.primary};

    @media screen and (min-width: ${StyleConstants.LAPTOP}) {
      width: 15rem;
    }
  }

  @media screen and (min-width: ${StyleConstants.MOBILE_L}) {
    font-size: 2.5rem;
  }
  
  @media screen and (min-width: ${StyleConstants.TABLET}) {
    font-size: 3rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    font-size: 4rem;
    margin-bottom: 3rem;
  }
`
