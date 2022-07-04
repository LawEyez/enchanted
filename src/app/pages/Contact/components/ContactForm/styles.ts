import styled from "styled-components";
import { StyleConstants } from "../../../../../styles/StyleConstants";
import { SecondaryButton } from "../../../../components/Button";

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

`

export const Input = styled.input`
  padding: 1.5rem 1rem;
  outline: none;
  border: none;
  border-bottom: solid 1px ${({ theme }) => theme.textAlt1 };
  color: ${({ theme }) => theme.text };
  grid-column: span 2;
  background: transparent;
  font-size: 1.5rem;

  &:focus {
    border-color: ${({theme}) => theme.primary};
  }

  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    grid-column: span 1;
  }
`

export const TextArea = styled.textarea`
  padding: 1rem;
  outline: none;
  border: none;
  border-bottom: solid 1px ${({ theme }) => theme.textAlt1 };
  color: ${({ theme }) => theme.text };
  grid-column: span 1;
  max-width: 100%;
  background: transparent;
  margin-bottom: 4rem;
  font-size: 1.5rem;
  line-height: 150%;

  &:focus {
    border-color: ${({theme}) => theme.primary};
  }

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    grid-column: span 2;
    margin-bottom: 6rem;
  }
`

export const ContactButton = styled(SecondaryButton)`
  grid-column: span 2;
`
