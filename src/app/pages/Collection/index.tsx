import { useState } from "react"
import { Helmet } from "react-helmet-async"
import Lightbox from "react-image-lightbox"
import { Container, Section } from "../../../styles/global-styles"
import { useScrollToTop } from "../../hooks/useScrollToTop"
import { CollectionGrid, CollectionImage, CollectionTitle } from "./styles"

import 'react-image-lightbox/style.css';

const images = [
  {
    name: 'image1',
    src: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80'
  },
  {
    name: 'image2',
    src: 'https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'image3',
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
  },
]

const Collection = () => {
  useScrollToTop()

  const [open, setOpen] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)

  const handleImageClick = (i: number) => {
    setImgIndex(i)
    setOpen(true)
  }
  
  return (
    <>
      <Helmet>
        <title>Collection</title>
        <meta name="description" content="Collection of shots by Enchantment studio" />
      </Helmet>

      <Section>
        <Container>
          <CollectionTitle>wedding</CollectionTitle>

          <CollectionGrid>
            {images.map((img, i) => (
              <CollectionImage key={i} onClick={() => handleImageClick(i)} src={img.src} />
              ))}
            
          </CollectionGrid>

          {open && (
            <Lightbox
              mainSrc={images[imgIndex].src}
              nextSrc={images[(imgIndex + 1) % images.length].src}
              prevSrc={images[(imgIndex + images.length - 1) % images.length].src}
              onCloseRequest={() => setOpen(false)}
              onMovePrevRequest={() => setImgIndex((imgIndex + images.length - 1) % images.length)}
              onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
            />
          )}
        </Container>
      </Section>
    </>
  )
}

export default Collection
