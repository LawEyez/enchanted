import { useContext, useState } from "react"
import LineIcon from 'react-lineicons'

import { ThemeContext } from "../../contexts/Theme/ThemeContext"

import Brand from "../Brand"
import ToggleSwitch from "../ToggleSwitch"
import { 
  MenuBrandWrapper,
  ThemeIcon,
  MenuContent,
  MenuIcon,
  MenuLink,
  MenuLinkWrapper,
  MenuText,
  MenuWrapper,
  ThemeToggleGrid
} from "./styles"

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { isLight, changeTheme } = useContext(ThemeContext)
  
  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <MenuWrapper onClick={toggleMenu}>
        <MenuIcon isOpen={isOpen} />
        <MenuText>menu</MenuText>
      </MenuWrapper>

      <MenuContent isOpen={isOpen}>
        <ThemeToggleGrid>
          <ThemeIcon>
            <LineIcon name='sun' />
          </ThemeIcon>

          <ToggleSwitch toggle={isLight} toggleFunction={changeTheme} />

          <ThemeIcon>
            <LineIcon name='night' />
          </ThemeIcon>
        </ThemeToggleGrid>
        
        <MenuLinkWrapper>
          <MenuLink to='/' onClick={toggleMenu} >home</MenuLink>
          <MenuLink to='/about' onClick={toggleMenu} >about</MenuLink>
          <MenuLink to='/gallery' onClick={toggleMenu} >gallery</MenuLink>
          <MenuLink to='/services' onClick={toggleMenu} >services</MenuLink>
          <MenuLink to='/contact' onClick={toggleMenu} >contact</MenuLink>
        </MenuLinkWrapper>

        <MenuBrandWrapper>
          <Brand />
        </MenuBrandWrapper>
      </MenuContent>
      
    </>
  )
}

export default Menu


