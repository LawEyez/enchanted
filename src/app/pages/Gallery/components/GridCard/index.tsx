import React from "react"
import { Link } from "react-router-dom"
import { Collection } from "../../types"
import { Background, Container, Content, Title } from "./styles"

const GridCard: React.FC<Collection> = ({ id, img, name }) => {
  return (
    <Container>
      <Background src={img} />

      <Link to={`/collection/${id}`} >
        <Content>
          <Title>{name}</Title>
        </Content>
      </Link>
    </Container>
  )
}

export default GridCard
