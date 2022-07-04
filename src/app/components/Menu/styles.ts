import { Link } from "react-router-dom"
import styled from "styled-components"
import { StyleConstants } from "../../../styles/StyleConstants"

export const MenuWrapper = styled.div`
  position: fixed;
  top: 2.5rem;
  right: 1.5rem;
  z-index: 50;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    right: 2.5rem;
  }
`

export const MenuIcon = styled.div<{ isOpen: boolean }>`
  position: relative;
  display: block;
  height: 1px;
  width: 2rem;
  background: ${props => props.theme.text};
  transform: ${props => props.isOpen ? `translateY(2px)` : `translateY(-2px)`} ${props => props.isOpen && `rotate(45deg)`};

  &::after  {
    content: '';
    display: block;
    position: absolute;
    top: 8px;
    height: 1px;
    width: 2rem;
    background: ${props => props.theme.text};
    transform: ${props => props.isOpen && `rotate(-90deg) translate(8px, 0px)`};
  }
`

export const MenuText = styled.p`
  margin-left: 1.6rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${props => props.theme.text};
  
  &::selection {
    background: transparent;
  }
`

export const MenuContent = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  z-index: 40;
  background: ${(props) => props.theme.bgVariant};
  backdrop-filter: blur(5px);
  box-shadow: 0 1px 1rem rgba(0,0,0,.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8rem 6rem;
  transform: ${props => props.isOpen ? `translateX(0)` : `translateX(100%)`};

  @media screen and (min-width: ${StyleConstants.MOBILE_L}) {
    width: 30rem;
  }
`

export const MenuLinkWrapper = styled.div`
  width: 100%;
  height: max-content;
  margin: auto;
`

export const MenuLink = styled(Link)<{ onClick: Function }>`
  position: relative;
  width: 100%;
  font-size: 3rem;
  text-transform: capitalize;
  display: block;
  margin: 2.5rem 0;
  font-weight: 500;
  color: ${props => props.theme.textAlt1};
  transition: .3s ease-out;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 5px;
    background: ${props => props.theme.text};
    transform: translateX(-6rem);
    opacity: 0;
    transition: .3s ease-out;
  }

  &:hover {
    color: ${props => props.theme.text};

    &:before {
      opacity: 1;
    }
  }


`

export const MenuBrandWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MenuButton = styled.button<{ onClick: React.MouseEventHandler<HTMLButtonElement> }>`
  font-family: 'Lexend Deca';
  text-transform: capitalize;
  font-size: 1.3rem;
  padding: 1rem 2rem;
`

export const ThemeToggleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  width: 50%;
`

export const ThemeIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.text};
`