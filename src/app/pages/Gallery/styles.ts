import styled from "styled-components";
import { SectionTitle } from "../../../styles/global-styles";
import { StyleConstants } from "../../../styles/StyleConstants";

export const GalleryHeader = styled.div`
  display: flexbox;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 0;

  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    margin-top: 8rem;
    margin-bottom: 4rem;
  }
  
`

export const GalleryTitle = styled(SectionTitle)`
  margin-bottom: 0;
`

export const ViewWrapper = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    gap: 3rem;
  }
`

export const ViewButton = styled.button`
  font-size: 1.4rem;
  background: transparent;
  border: none;
  color: ${props => props.theme.textAlt1};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text};
  }

  @media screen and (min-width: ${StyleConstants.LAPTOP}) {
    font-size: 1.8rem;
  }
` 