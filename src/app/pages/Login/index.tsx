import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { ResponseState, useLoginMutation } from "../../../store/features/users/user.api"

import { Container, Section, SectionTitle } from "../../../styles/global-styles"
import { SecondaryButton } from "../../components/Button"
import { Input } from "../Contact/components/ContactForm/styles"
import { InputContainer, LoginForm } from "./styles"

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const [login, {data}] = useLoginMutation()
  
  useEffect(() => {
    if(!data) return
    
    console.log(data)
  }, [data])
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login({ email, password })
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Section>
        <Container>
          <SectionTitle>login</SectionTitle>
          {data ? 'Loading...' : (

            <LoginForm onSubmit={handleSubmit}>
              <InputContainer>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />

                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </InputContainer>

              <SecondaryButton outline>login</SecondaryButton>
            </LoginForm>
          )}
        </Container>
      </Section>
    </>
  )
}

export default Login
