import styled from "styled-components";

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: span 1;
  /* width: 30rem; */
`

export const TeamImage = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`

export const TeamName = styled.h3`
  font-size: 2rem;
  text-transform: capitalize;
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`

export const TeamJob = styled.p`
  font-size: 1.5rem;
  text-transform: capitalize;
  color: ${props => props.theme.textAlt2};
`