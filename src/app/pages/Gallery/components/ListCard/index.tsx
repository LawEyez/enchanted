import React from "react"
import { Link } from "react-router-dom"
import { Collection } from "../../types"
import { ListCardBackground, ListCardContainer, ListCardContent, ListCardImage, ListCardTitle } from "./styles"

const ListCard: React.FC<Collection> = ({ id, img, name }) => {
  return (
    <ListCardContainer>
      <ListCardBackground src={img} />

      <Link to={`/collection/${id}`} >
        <ListCardContent>
          <ListCardTitle>{name}</ListCardTitle>
          <ListCardImage src={img} />
        </ListCardContent>
      </Link>
    </ListCardContainer>
  )
}

export default ListCard
