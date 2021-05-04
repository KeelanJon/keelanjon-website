import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import PrimaryButton from "./buttons/PrimaryButton"

function PortfolioGrid(props) {
  const projects = props.projectData

  let projectID = 0

  return (
    <Container>
      <GridContainer id="portfolioGrid">
        {console.log(projects)}

        {projects.map(function (item, index) {
          ++projectID
          return (
            <PortfolioCard id={`item-` + projectID}>
              <Link to={item.slug}>
                <FeaturedImage
                  fluid={item.image.childImageSharp.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt="An image of a project by Keelan Jon"
                />
                <CardText>
                  <h3 id="title">{item.title}</h3>
                  <p id="category">{item.technology}</p>
                </CardText>
              </Link>
            </PortfolioCard>
          )
        })}
      </GridContainer>
    </Container>
  )
}

export default PortfolioGrid

const Container = styled.section`
  padding: 10vh 0;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);

  height: 100vh;

  background: red;

  #item-1 {
    grid-column: 1/6;
    grid-row: 1/4;
  }

  #item-2 {
    grid-column: 6/9;
    grid-row: 1/5;
  }

  #item-3 {
    grid-column: 1/6;
    grid-row: 4/9;
  }

  #item-4 {
    grid-column: 6/9;
    grid-row: 5/9;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    grid-template-columns: 1fr;

    #item-1,
    #item-2,
    #item-3,
    #item-4 {
      grid-column: 1/2;
      grid-row: auto;
    }
  }
`

const PortfolioCard = styled.div`
  position: relative;
`

const CardText = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  background: #0e0e16;
  z-index: 2;
  opacity: 0;

  transition: 0.3s ease 0s;
  cursor: pointer;

  * {
    transition: 0.3s ease 0s;
  }

  &:hover {
    opacity: 0.9;

    #title {
      transform: translateY(0);
    }

    #category {
      transform: translateY(0);
    }
  }

  #title {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 4px;

    transform: translateY(300%);
  }

  #category {
    font-size: 0.8rem;
    padding: 0;

    transform: translateY(300%);
  }
`

const FeaturedImage = styled(Img)`
  height: 100%;
  width: auto;
  transition: 0.6s ease 0s;

  cursor: pointer;

  &:hover {
  }
`
