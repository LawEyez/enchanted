import { ContactButton, FormContainer, Input, TextArea } from "./styles"

const ContactForm = () => {
  return (
    <FormContainer>
      <Input
        name="name"
        type="text"
        placeholder="Name"
      />

      <Input
        name="email"
        type="email"
        placeholder="Email"
      />

      <TextArea
        placeholder="Message"
        rows={5}
      >

      </TextArea>

      <ContactButton outline>send</ContactButton>
      
    </FormContainer>
  )
}

export default ContactForm
