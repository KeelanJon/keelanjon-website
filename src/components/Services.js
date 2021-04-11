import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

//icon imports
import { BsArrowRightShort } from "react-icons/bs"

//Webpack imports
import ServiceOne from "../images/design-dev-image.png"
import ServiceTwo from "../images/illustration-image.png"

function Services({ data }) {
  return (
    <Container id="services">
      <Wrapper>
        <ServiceCard>
          {/* <Img fluid={data.file.childImageSharp.fluid} alt="" /> */}
          <CardImage>
            <img src={ServiceOne} />
          </CardImage>

          <h2>Design & Development</h2>
          <p>
            Promoting your business through the fantastic medium of the
            internet, I can design, prototype and develop your next project.
          </p>
          <a href="#projects">
            View Projects <BsArrowRightShort id="link-icon" />
          </a>
        </ServiceCard>
        <ServiceCard>
          {/* <Img fluid={data.file.childImageSharp.fluid} alt="" /> */}
          <CardImage>
            <img src={ServiceTwo} alt="service image" />
          </CardImage>

          <h2>3D illustration</h2>
          <p>
            3D design and virtual reality is the new frontier for 2021. Bring
            your next project to life with beautiful 3D characters,
            illustrations and design.
          </p>
          <a href="#projects">
            View Projects <BsArrowRightShort id="link-icon" />
          </a>
        </ServiceCard>
      </Wrapper>

      {console.log(data)}
    </Container>
  )
}

export default Services

//GraphQl Query for retreiving the service images
export const cardImageQuery = graphql`
  query {
    file(relativePath: { eq: "design-dev-image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Container = styled.section`
  padding: 10vh 0;
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    flex-direction: column;
  }
`
const ServiceCard = styled.div`
  padding: 0;
  flex: 1;

  /*Here padding has been added to first service card alone
    as the "gap" property doesn't seems to work in some browsers */
  &:nth-of-type(1) {
    padding-right: 3rem;

    /* Padding removed on stacked mobile view */
    @media screen and (max-width: ${props =>
        props.theme.screenDimensions.mobile}) {
      padding: 0;
      padding-bottom: 3em;
    }
  }

  h2 {
    font-size: 1.5rem;
    padding: 1.5rem 0;
  }

  p {
    padding: 0.5rem 0;
  }

  a {
    display: flex;
    align-items: center;

    padding: 0.5rem 0;

    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;

    transform: translateX(0%);

    transition: 0.3s ease 0s;

    &:hover {
      transform: translateX(5%);
    }

    #link-icon {
      font-size: 1.5rem;
    }
  }
`

const CardImage = styled.div`
  height: 30vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 25% 10%;

    @media screen and (max-width: ${props =>
        props.theme.screenDimensions.mobile}) {
    }
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    height: 20vh;
  }
`
