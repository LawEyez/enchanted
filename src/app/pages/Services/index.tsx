import { Helmet } from "react-helmet-async"
import { Container, Section } from "../../../styles/global-styles"
import { useScrollToTop } from "../../hooks/useScrollToTop"
import ServiceCard from "./components/ServiceCard"
import { ServicesContainer, ServicesTitle } from "./styles"

const Services = () => {
  useScrollToTop()
  
  return (
    <>
      <Helmet>
        <title>Services</title>
        <meta name="description" content="Services offered by Enchantment Africa photography studio" />
      </Helmet>

      <Section>
        <Container>
          <ServicesTitle>services</ServicesTitle>

          <ServicesContainer>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </ServicesContainer>
        </Container>
      </Section>
    </>
  )
}

export default Services
