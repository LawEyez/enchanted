import { useRef, useState } from "react"
import { Helmet } from "react-helmet-async"
import LineIcon from 'react-lineicons'

import { useScrollToTop } from "../../hooks/useScrollToTop"

import GalleryView from "./components/GalleryView"

import { Container, Section } from "../../../styles/global-styles"
import { GalleryHeader, GalleryTitle, ViewButton, ViewWrapper } from "./styles"

const Gallery = () => {
  useScrollToTop()

  const [isList, setIsList] = useState(true)
  const [collections, setCollections] = useState([
    {
      id: '1',
      name: 'wedding',
      img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: '2',
      name: 'portrait',
      img: 'https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: '3',
      name: 'nature',
      img: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80'
    },
  ])

  const header = useRef(null)

  return (
    <>
      <Helmet>
        <title>Gallery</title>
        <meta name="description" content="Photo Gallery for Enchantment Africa photography studio" />
      </Helmet>

      <Section>
        <Container>
          <GalleryHeader ref={header} >
            <GalleryTitle>gallery</GalleryTitle>

            <ViewWrapper>
              <ViewButton onClick={() => setIsList(true)}>
                <LineIcon name='list' />
              </ViewButton>

              <ViewButton onClick={() => setIsList(false)}>
                <LineIcon name='grid-alt' />
              </ViewButton>
            </ViewWrapper>
          </GalleryHeader>

          <GalleryView collections={collections} isList={isList} />
        </Container>
      </Section>
    </>
  )
}

export default Gallery
