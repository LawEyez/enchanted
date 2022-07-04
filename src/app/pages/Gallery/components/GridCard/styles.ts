import styled from "styled-components";
import { StyleConstants } from "../../../../../styles/StyleConstants";

export const Container = styled.div`
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

export const Background = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const Content = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.bgVariant};
  backdrop-filter: blur(5px);

  @media screen and (min-width: ${StyleConstants.MOBILE_L}) {
    padding: 1.5rem;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.text };
  font-size: 1.3rem;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;

  &::before {
    content: '';
    display: block;
    height: 1.5rem;
    width: 5px;
    border-radius: 5px;
    margin-bottom: 1rem;
    background: ${({ theme }) => theme.primary};

    @media screen and (min-width: ${StyleConstants.MOBILE_L}) {
      margin-bottom: 2rem;
    }
  }

  @media screen and (min-width: ${StyleConstants.MOBILE_L}) {
    font-size: 1.6rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    font-size: 2rem;
  }
`