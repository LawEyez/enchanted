import { Link } from "react-router-dom"
import { Collection } from "../../types"
import GridCard from "../GridCard"
import ListCard from "../ListCard"
import { GalleryLayout } from "./styles"

interface GalleryViewProps {
  collections: Collection[],
  isList: boolean
}

const GalleryView: React.FC<GalleryViewProps> = ({ collections, isList }) => {

  const listContent = collections.map((coll, i) => (
    
      <ListCard  id={coll.id} name={coll.name} img={coll.img} />
    
  ))
  
  const gridContent = collections.map((coll, i) => (
    <GridCard key={i} id={coll.id} name={coll.name} img={coll.img} />
  ))


  return (
    <>
      {isList ? (
        <GalleryLayout>
          {listContent}
        </GalleryLayout>
      ) : (
        <GalleryLayout grid>
          {gridContent}
        </GalleryLayout>
      )}
    </>
  )
}

export default GalleryView
