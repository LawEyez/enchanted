import styled from "styled-components";
import { StyleConstants } from "../../../../../styles/StyleConstants";

export const ListCardContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 2rem;
  border: solid 1px transparent;
  cursor: pointer;

  &:hover {
    transform: translateY(-7px);
    border-color: ${({ theme }) => theme.text};
  }
`

export const ListCardBackground = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const ListCardContent = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bgVariant};
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  padding: 1.5rem 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (min-width: ${StyleConstants.MOBILE_L}) {
    padding: 2rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    padding: 4rem;
  }
`

export const ListCardTitle = styled.h2`
  font-size: 1.3rem;
  text-transform: capitalize;
  color: ${({theme}) => theme.text};
  font-weight: 400;

  @media screen and (min-width: ${StyleConstants.MOBILE_L}) {
    border-left: solid 5px ${({ theme }) => theme.primary};
    border-radius: 5px;
    padding-left: 1rem;
    font-size: 1.5rem;
    padding-left: 2rem;
  }
  
  @media screen and (min-width: ${StyleConstants.TABLET}) {
    font-size: 2rem;
    padding-left: 2.5rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    font-size: 2.5rem;
    padding-left: 3rem;
  }
`

export const ListCardImage = styled.img`
  height: 100%;
  border-radius: 1rem;

  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    font-size: 4rem;
  }
`