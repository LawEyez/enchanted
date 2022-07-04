import styled from "styled-components";
import { Section } from "../../../styles/global-styles";
import { StyleConstants } from "../../../styles/StyleConstants";

export const VerticalCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    justify-content: center;
  }
`

export const HomeSection = styled(Section)`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    flex-direction: row;
  }
  
`

export const HomeContainer = styled.div`
  height: 50%;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    height: 100%;
  }
`

export const HomeImage = styled.img<{ normal?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${props => !props.normal ? `20rem 20rem 20rem 0` : '0 0 0 0'};
  box-shadow: ${props => !props.normal ? `10rem -10rem 0 ${props.theme.bgVariant}` : `none`};

  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    border-radius: ${props => !props.normal ? `25rem 25rem 25rem 0` : '25rem 0 0 0'};;
    box-shadow: ${props => !props.normal ? `30rem -20rem 0 ${props.theme.bgVariant}` : `none`};
  }
`


export const TextContainer = styled.div`
  @media screen and (min-width: ${StyleConstants.TABLET}) {
    margin-left: 3rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    margin-left: 4rem;
  }
`

export const LineText = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  display: flex;
  align-items: center;
  color: ${props => props.theme.textAlt2};

  &::before {
    content: '';
    display: block;
    height: 1px;
    border: none;
    width: 15rem;
    background: ${props => props.theme.textAlt1};
    margin-right: 1rem;
  }

  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    font-size: 2rem;
  }
`

export const BigText = styled.h2`
  font-size: 3.5rem;
  text-transform: capitalize;
  font-weight: 600;
  margin: 2.5rem 0;
  color: ${props => props.theme.text};
  font-family: 'Big Shoulders Stencil Text';


  @media screen and (min-width: ${StyleConstants.MOBILE_L}) {
    font-size: 3.8rem;
  }
  
  @media screen and (min-width: ${StyleConstants.TABLET}) {
    font-size: 4rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    font-size: 5.5rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP_L}) {
    font-size: 6rem;
  }
`

export const UpperText = styled.p`
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 1.2rem;
  font-weight: 300;
  color: ${props => props.theme.textAlt2};
  margin-bottom: 3rem;
  line-height: 170%;

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    margin-bottom: 5rem;
    font-size: 1.3rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    font-size: 1.5rem;
  }
`

export const ActionTextWrapper = styled.div`
  @media screen and (min-width: ${StyleConstants.TABLET}) {
    margin-right: 4rem;
  }
`

export const ActionText = styled.p<{ shadow?: boolean }>`
  font-size: 1.5rem;
  color: ${props => props.theme.textAlt1};
  max-width: 40ch;
  line-height: 160%;
  font-weight: 300;
  cursor: default;
  transition: .3s ease;
  width: 100%;
  margin-bottom: 4rem;

  &:hover {
    color: ${props => props.theme.text};
  }

  @media screen and (min-width: ${StyleConstants.MOBILE_L}) {
    font-size: 1.7rem;
  }
  
  @media screen and (min-width: ${StyleConstants.TABLET}) {
    font-size: 2rem;
  }

`

export const HomeScroll = styled.div`
  position: absolute;
  z-index: 30;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
  color: ${props => props.theme.textAlt1};

  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    font-size: 5rem;
  }
`

export const HomeFlex = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    flex-direction: row;
    width: 80%;
    margin: auto;
  }
`