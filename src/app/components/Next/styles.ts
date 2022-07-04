import { Link } from "react-router-dom"
import styled from "styled-components"
import { StyleConstants } from "../../../styles/StyleConstants"

export const NextCenter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  background: ${props => props.theme.bg};
`

export const NextLink = styled(Link)`
  display: block;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px ${props => props.theme.textAlt1};
  color: ${props => props.theme.text};
  border-radius: 100%;
  padding: 4rem;
  transition: .3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.text};
    box-shadow: ${props => `0 1px 1rem ${props.theme.text}`};
  }

  @media screen and (min-width: ${StyleConstants.TABLET}) {
    font-size: 10rem;
  }
`