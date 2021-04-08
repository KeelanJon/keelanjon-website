import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import Img from "gatsby-image"
import BackgroundCircle from "../components/BackgroundCircle"
import Contact from "../components/Contact"

export default function BlogPost({ data }) {
  const post = data.markdownRemark.frontmatter
  const bannerImage = post.banner.childImageSharp.fluid

  return (
    <Layout>
      <BackgroundCircle top={"-200px"} left={"-200px"} />
      <Container>
        <Header>
          <TitleContainer>
            <h2>Illustration</h2>
            <h1>{post.title}</h1>
          </TitleContainer>
        </Header>
        <Info>
          <InfoBox>
            <h4>Author</h4>
            <p>{post.author}</p>
          </InfoBox>
          <InfoBox>
            <h4>Date</h4>
            <p>{post.date}</p>
          </InfoBox>
          <InfoBox>
            <h4>Category</h4>
            <p>{post.category}</p>
          </InfoBox>
        </Info>

        <Banner fluid={bannerImage}></Banner>

        <TextSection>
          <div>
            <h6>
              <span>01.</span> How it started
            </h6>
          </div>
          <div>
            <h3>The Challenge</h3>
            <p>
              I am practiced within a variety of technologies and currently
              focus on React.Js to provide amazing user experiences, with
              Gatsby.js for faster development and delivery I am practiced
              within a variety of technologies and currently focus on React.Js
              to provide amazing user experiences, with Gatsby.js for faster
              development and delivery
              {post.paragraphOne}
            </p>
          </div>
        </TextSection>
      </Container>
    </Layout>
  )
}

//The GRAPHQL query is HERE
//This query simply pulls data into the post and allows us to
//use the data inside of the dynamic page.
//All data is loaded into the Post variables for easy use
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
        author
        category
        paragraphOne
        paragraphTwo
        banner {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Container = styled.div`
  position: relative;
  padding: 0rem 10%;
  background: none;
  overflow: hidden;

  & * {
    background: none;
  }
`
/*---------------------Page Header Section HERE---------------*/

const Header = styled.div`
  height: 30vh;
  padding-top: 15rem;

  display: flex;
  align-items: center;

  h1 {
    font-size: 5rem;
    width: 60%;

    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`
const TitleContainer = styled.div`
  h1 {
    font-size: 5rem;
    width: 60%;

    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  h2 {
    font-weight: 300;
    font-size: 1.2rem;
    letter-spacing: 1px;
    line-height: 1.8;
    padding: 1rem 0;
  }
`

/*---------------------Info and category styles---------------*/

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  padding: 5rem 0;
`
const InfoBox = styled.div`
  margin-right: 5rem;
  padding: 2rem 0rem;

  h4 {
    font-size: 1.5rem;
    text-transform: lowercase;
    text-transform: capitalize;
    line-height: 1.8;
    font-weight: 700;
  }

  p {
    font-weight: light;
  }
`

/*---------------------First featured image styled components here---------------*/

const Banner = styled(Img)`
  padding: 10rem 5rem;
  margin: auto auto;
  height: 40vh;
  object-fit: cover;
`

const TextSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 15vh 0;
  text-align: justify;
  line-height: 1.8;

  & > * {
    flex: 1;
  }

  h3 {
    font-size: 2.5rem;
    padding-bottom: 1rem;
  }

  h6 {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 1px;

    & > span {
      color: blue;
    }
  }

  p {
    font-size: 1.025rem;
    font-weight: 300;
  }

  /*Media queries change the flex direction to column for mobile view*/
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10vh 0;

    h3 {
      padding-top: 5rem;
    }
  }
`
const ParallaxSection = styled.div`
  width: 100%;
  background: blue;
`

/*---------------------Image slider section styled components are HERE---------------*/
const ImageSliderContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;

  height: 800px;
`

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`

const StyledImg = styled(Img)`
  height: 100%;
  width: 960px;

  filter: blur(0px);

  transition: 0.6s ease 0s;

  &:hover {
    filter: blur(0);
  }
`

const screenDimension = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1025px",
}
