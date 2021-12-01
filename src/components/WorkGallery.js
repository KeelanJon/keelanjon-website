import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

function WorkGallery(props) {
  const projects = props.projectData

  return (
    <GalleryContainer id="clientWork">
      {projects.map(function (item) {
        return (
          <GalleryCard
            data-sal="slide-up"
            data-sal-delay="0"
            data-sal-easing="ease-in-out"
            data-sal-duration="600"
          >
            <Link to={item.slug}>
              <ImageContainer>
                <FeaturedImage
                  fluid={item.image.childImageSharp.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt=""
                />
              </ImageContainer>
              <CardText>
                <Category>{item.category}</Category>
                <ProjectTitle>{item.title}</ProjectTitle>
              </CardText>
            </Link>
          </GalleryCard>
        )
      })}
    </GalleryContainer>
  )
}

export default WorkGallery

const GalleryContainer = styled.div`
  padding: 5% 0%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  max-width: 1440px;
  margin: auto auto;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    grid-template-columns: 1fr !important;
  }
`

const Category = styled.h5`
  font-weight: 300;
  font-size: 1rem;

  padding: 1rem;
  padding-left: 0;
`
const ProjectTitle = styled.h3`
  font-size: 2rem;
`

const CardText = styled.div`
  transition: 0.3s ease 0s;
  max-width: 60%;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    max-width: 60%;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    max-width: 80%;
  }
`

const GalleryCard = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  max-width: 100%;
  cursor: pointer;
  overflow: hidden;

  transition: 0.3s ease 0s;

  & > * {
    text-decoration: none;
  }

  &:hover ${CardText} {
    padding-left: 2rem;
  }

  &:nth-of-type(even) {
    margin-top: 4rem;
  }

  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.6s ease 0s;

  &:hover {
  }
`

const FeaturedImage = styled(Img)`
  width: 100%;
  height: 75vh;
  object-fit: cover;
  transition: 0.6s ease 0s;

  &:hover {
  }
`

const ImageContainer = styled.div`
  overflow: hidden;
  transition: 0.6s ease 0s;

  &:hover {
    ${CardImage} {
      transform: scale(1.4);
    }

    ${ProjectTitle} {
      color: red;
    }
    margin: 1rem;
  }
`
