import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

function ProjectGallery(props) {
  return (
    <GalleryContainter>
      {props.imageData.galleryImages.map(function (item, index) {
        return (
          <Img
            fluid={item.childImageSharp.fluid}
            fadeIn
            alt="Project gallery image"
          />
        )
      })}
    </GalleryContainter>
  )
}

export default ProjectGallery

const GalleryContainter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    grid-template-columns: 1fr;
  }

  > :nth-of-type(2) {
    flex: 2;
  }
`
