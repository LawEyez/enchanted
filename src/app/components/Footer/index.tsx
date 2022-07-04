import styled from "styled-components";
import { Container } from "../../../styles/global-styles";
import Brand from "../Brand";
import LineIcon from 'react-lineicons'
import { Link } from "react-router-dom";
import { StyleConstants } from "../../../styles/StyleConstants";

const FooterSection = styled.footer`
  position: relative;
  width: 100%;
  padding: 6rem 1.5rem;
  background: ${props => props.theme.bg};

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  
  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    padding-left: 0;
    padding-right: 0;
  }
`

const FooterContainer = styled.div`
  border-top: solid 1px ${props => props.theme.textAlt1};
  padding-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Social = styled.div`
  display: flex;
  align-items: center;
  `

const SocialIcon = styled(Link)`
  margin-left: 2.5rem;
  font-size: 1.5rem;
  color: ${props => props.theme.textAlt1};

  &:hover {
    color: ${props => props.theme.text};
  }

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    margin-left: 4rem;
    font-size: 2rem;
  }
`

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContainer>
          <Brand />

          <Social>
            <SocialIcon to='/'>
              <LineIcon name='facebook-filled' />
            </SocialIcon>

            <SocialIcon to='/'>
              <LineIcon name='twitter-filled' />
            </SocialIcon>
            
            <SocialIcon to='/'>
              <LineIcon name='instagram-filled' />
            </SocialIcon>
          </Social>
        </FooterContainer>
      </Container>
    </FooterSection>
  )
}

export default Footer