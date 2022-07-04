import styled from 'styled-components'
import { StyleConstants } from '../../../styles/StyleConstants'
import { ReactComponent as Logo } from './assets/logo.svg'

export const StyledLogo = styled(Logo)`
  width: 2.5rem;
  height: 2.5rem;

  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    width: 4rem;
    height: 4rem;
  }
`
export const BrandWrapper = styled.div`
  /* mix-blend-mode: difference;
  background: transparent; */
`  