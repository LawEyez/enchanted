import { Helmet } from "react-helmet-async"
import LineIcon from 'react-lineicons'
import { PrimaryButton, SecondaryButton } from "../../components/Button"
import Next from "../../components/Next"
import { useScrollToTop } from "../../hooks/useScrollToTop"
import { ActionText, ActionTextWrapper, BigText, HomeContainer, HomeFlex, HomeImage, HomeScroll, HomeSection, LineText, TextContainer, UpperText } from "./styles"


const Home = () => {

  useScrollToTop()

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home page for Enchantment Africa photography studio" />
      </Helmet>


      <HomeSection>
        <HomeContainer>
          <HomeImage
            src='https://images.unsplash.com/photo-1622738010740-4b8e34702474?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvJTIwc3R1ZGlvfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          />
        </HomeContainer>
        
        <HomeContainer>
          <TextContainer>
            <LineText>picturesque</LineText>
            <BigText>capture the moments</BigText>
            <UpperText>with enchantment africa</UpperText>
          </TextContainer>
        </HomeContainer>

        <HomeScroll>
          <LineIcon name='scroll-down' />
        </HomeScroll>
      </HomeSection>

      <HomeSection>
        <HomeFlex>
          <HomeContainer>
            <ActionTextWrapper>
              <ActionText shadow>
                Photographs are the closest things we have to time travel.
                Here at Enchanment, we've made it our mission to help you
                immortalize your memories and experiences.
              </ActionText>

              <SecondaryButton outline>explore gallery</SecondaryButton>
            </ActionTextWrapper>
          </HomeContainer>

          <HomeContainer>
            <HomeImage
              normal
              src='https://images.unsplash.com/photo-1613234281364-0caadd9faf5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
            />
          </HomeContainer>
        </HomeFlex>
      </HomeSection>

      <Next />
      
    </>
  )
}

export default Home
