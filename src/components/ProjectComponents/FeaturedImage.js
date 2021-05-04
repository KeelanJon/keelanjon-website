import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

function FeaturedImage(props) {
  return (
    <FeaturedProjectImage fluid={props.image}>
      This is the project image
    </FeaturedProjectImage>
  )
}

export default FeaturedImage

const FeaturedProjectImage = styled(Img)``
