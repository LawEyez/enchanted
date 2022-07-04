import { Helmet } from "react-helmet-async"
import { Container, CustomSection, SectionTitle } from "../../../styles/global-styles"
import TeamCard from "../../components/TeamCard"
import { useScrollToTop } from "../../hooks/useScrollToTop"
import { AboutContainer, AboutImage, AboutLetter, AboutSection, AboutText, AboutTitle, TeamGrid } from "./styles"

const About = () => {
  
  useScrollToTop()
  
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About Enchantment Africa photography studion" />
      </Helmet>

      <AboutSection>
        <AboutContainer>
          <AboutImage src={'https://images.unsplash.com/photo-1515522775943-e02e2c68fcb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} />
        </AboutContainer>

        <AboutContainer>
          <AboutLetter>c</AboutLetter>
          <AboutTitle>who we are</AboutTitle>
        </AboutContainer>
      </AboutSection>

      <CustomSection>
        <Container>
          <AboutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolores sapiente unde eligendi vitae? Magni atque illo sed accusamus velit voluptate accusantium tempore, dolore repellendus magnam reiciendis nobis perferendis totam.
          </AboutText>
        </Container>
      </CustomSection>

      <CustomSection>
        <Container>
          <SectionTitle>the team</SectionTitle>

          <TeamGrid>
            <TeamCard
              name='stan'
              img='https://images.unsplash.com/photo-1519603173576-3dd89656f9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              job='founder'
            />
            <TeamCard
              name='stan'
              img='https://images.unsplash.com/photo-1534491089148-7a0f3dc3c20e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              job='founder'
            />
            <TeamCard
              name='stan'
              img='https://images.unsplash.com/photo-1531901599143-df5010ab9438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              job='founder'
            />
          </TeamGrid>
        </Container>
      </CustomSection>
    </>
  )
}

export default About
