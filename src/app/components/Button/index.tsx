import styled from "styled-components";
import { StyleConstants } from "../../../styles/StyleConstants";

export const Button = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.3rem;
  border-radius: 99999px;
  border: transparent;
  cursor: pointer;

  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    font-size: 1.5rem;
  }
`

export const PrimaryButton = styled(Button)<{ outline?: boolean }>`
  background: ${props => !props.outline ? props.theme.primary : 'transparent'};
  color: ${props => !props.outline ? props.theme.bg : props.theme.text};
  border: ${props => props.outline && `solid 1px ${props.theme.text}`};
  padding: 1rem 2rem;

  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    padding: 1.5rem 3rem;
  }
`

export const SecondaryButton = styled(Button)<{ outline?: boolean }>`
  background: ${props => !props.outline ? props.theme.text : 'transparent'};
  color: ${props => !props.outline ? props.theme.bg : props.theme.text};
  border: ${props => props.outline && `solid 1px ${props.theme.text}`};
  padding: 1.5rem 3rem;
  transition: .3s ease;

  &:hover {
    background: ${props => props.outline ? props.theme.text : props.theme.bg};
    color: ${props => props.outline ? props.theme.bg : props.theme.text};  
  }
`