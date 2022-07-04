import { Helmet } from "react-helmet-async"
import { Container } from "../../../styles/global-styles"
import { useScrollToTop } from "../../hooks/useScrollToTop"
import ContactForm from "./components/ContactForm"
import { ContactContainer, ContactSection, ContactText } from "./styles"

const Contact = () => {
  useScrollToTop()
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Contact Enchantment Africa photography studio" />
      </Helmet>

      <ContactSection>
        <Container>
          <ContactContainer>
            <ContactText>have a gig? tell us more</ContactText>

            <ContactForm />
          </ContactContainer>
        </Container>
      </ContactSection>
    </>
  )
}

export default Contact
