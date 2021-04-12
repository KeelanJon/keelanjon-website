import React from "react"
import styled from "styled-components"
import Layout from "../../components/Layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

//image Imports
import HeaderImage from "../../data/project-images/letstalk-featured-image.png"
import ProjectGallery from "../../components/ProjectGallery"

function illustrationProjectOne({ data }) {
  const projectInfo = data.allProjectsJson.edges[0].node

  return (
    <Layout>
      {console.log(projectInfo)}
      <Header>
        <h1>{projectInfo.title}</h1>
        <p>
          A 3D character illustration pack created by Keelan Jon for use within
          UI/UX design projects.
        </p>
        <Link to="https://gumroad.com/keelanjon">Product Page</Link>
      </Header>
      <DetailsSection id="overview">
        <DetailCard>
          <h3>Author</h3>
          <p>{projectInfo.author}</p>
        </DetailCard>
        <DetailCard>
          <h3>Date</h3>
          <p>{projectInfo.date}</p>
        </DetailCard>
        <DetailCard>
          <h3>Category</h3>
          <p>{projectInfo.category}</p>
        </DetailCard>
        <DetailCard>
          <h3>Technology</h3>
          <p>{projectInfo.technology}</p>
        </DetailCard>
      </DetailsSection>
      <FeaturedImage>
        {/* <img src={projectInfo.FeaturedImage.childrenImageSharp.fluid} /> */}
        <Img fluid={projectInfo.featuredImage.childImageSharp.fluid} />
      </FeaturedImage>
      <TextArea>
        <div>
          <h4>Overview</h4>
        </div>
        <div>
          <h2>Description</h2>

          <p>
            Bring your next design or animation project to life with this
            high-quality 3D Character & UI/UX pack. Use for illustration, or
            create your own scenes with this ready to use character.
          </p>
        </div>
      </TextArea>

      <ProjectGallery imageData={projectInfo} />
    </Layout>
  )
}

export default illustrationProjectOne

//Graphql queries here!

export const ProjectData = graphql`
  query ProjectQuery3 {
    allProjectsJson(
      filter: { slug: { eq: "/projects/illustration-project-one/" } }
    ) {
      edges {
        node {
          id
          title
          author
          category
          date
          description
          technology
          galleryImages {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

//Styled components begin here!

const Header = styled.section`
  padding: 20vh 0;

  h1 {
    font-size: 5vw;
    max-width: 800px;
    margin-bottom: 3rem;

    @media screen and (max-width: ${props =>
        props.theme.screenDimensions.tablet}) {
      font-size: 5rem;
    }

    @media screen and (max-width: ${props =>
        props.theme.screenDimensions.mobile}) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 18px;
    max-width: 700px;
    font-weight: 300;

    span {
      font-weight: 700;
    }

    @media screen and (max-width: ${props =>
        props.theme.screenDimensions.tablet}) {
      text-align: justify;
    }
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;

    margin: 2rem 0;
    transition: 0.3s ease 0s;
    &:hover {
      padding-left: 1rem;
    }
  }
`
const DetailsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 5vh 0;
  width: 100%;
`
const DetailCard = styled.div`
  padding-right: 5rem;
  padding-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
  }
  p {
    padding: 0.5rem 0;
  }
`
const FeaturedImage = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`
const TextArea = styled.div`
  display: flex;

  padding: 10vh 0;
  text-align: justify;

  h2 {
    font-size: ${props => props.theme.fontSizes.medium};
    padding: 1.5rem 0;
  }

  div {
    flex: 1;
  }

  span {
    font-weight: 500;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    flex-direction: column;
  }
`
const FullWidthImage = styled.div``
