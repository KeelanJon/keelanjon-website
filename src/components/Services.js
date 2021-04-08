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
    <Container>
      <Wrapper>
        <ServiceCard>
          {/* <Img fluid={data.file.childImageSharp.fluid} alt="" /> */}
          <img src={ServiceOne} />
          <h2>Design & Development</h2>
          <p>
            Promoting your business through the fantastic medium of the
            internet, I can design, prototype and develop your next project.
          </p>
          <a href="#MyWork">
            View Projects <BsArrowRightShort id="link-icon" />
          </a>
        </ServiceCard>
        <ServiceCard>
          {/* <Img fluid={data.file.childImageSharp.fluid} alt="" /> */}
          <img src={ServiceTwo} alt="service image" />
          <h2>3D illustration</h2>
          <p>
            3D design and virtual reality is the new frontier for 2021. Bring
            your next project to life with beautiful 3D characters,
            illustrations and design.
          </p>
          <a href="#MyWork">
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
  gap: 3rem;
`
const ServiceCard = styled.div`
  padding: 0;
  flex: 1;

  img {
    width: 100%;
    object-fit: cover;
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
