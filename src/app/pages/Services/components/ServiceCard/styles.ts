import styled from "styled-components";
import { StyleConstants } from "../../../../../styles/StyleConstants";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;

  &:hover {
    transform: translateY(-5px);
  }
`

export const ServiceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 8rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.textAlt1};
  padding: 2rem;

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    font-size: 10rem;
    margin-bottom: 2.5rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    margin-bottom: 4rem;
  }
`

export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const ServiceNumber = styled.div`
  font-size: 3rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
  color: ${({ theme }) => theme.bgVariant};
  line-height: 1;
  font-weight: 600;
`

export const ServiceInfo = styled.div`

`

export const CardTitle = styled.h2`
  font-family: 'Big Shoulders Stencil Text';
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    font-size: 2.2rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP_L}) {
    font-size: 2.5rem;
  }

  &::after {
    content: '';
    margin-left: 1.5rem;
    height: 5px;
    width: 5rem;
    border-radius: 5px;
    background: ${({ theme }) => theme.primary};
  }
`

export const CardText = styled.p`
  font-weight: 300;
  line-height: 170%;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.textAlt2};

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    font-size: 1.5rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP_L}) {
    font-size: 1.7rem;
  }
`

