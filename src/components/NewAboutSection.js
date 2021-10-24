import React from "react"
import styled from "styled-components"
import PrimaryButton from "./buttons/PrimaryButton"
import { Link } from "gatsby"

function About() {
  return (
    <Container id="AboutMe">
      <div
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="600"
      >
        <h2>I like making things pretty and bringing them to life</h2>
      </div>

      <div
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="900"
      >
        {/* <p>
          Freelance Design & Developer based near Cardiff, South Wales UK.
          Running a small web design business under the name KeelsDesign, where
          I work with people and businesses to design creative solutions to
          their digital needs.
        </p> */}
        <p>
          Hi I’m Keelan, I am a developer with a keen interest in Front End
          Development and a passion for being creative, artistic and minimal
          design. I have skils and interests in a wide variety of areas, from
          Front End Development, UI/UX design, WordPress and 3D illustration.
        </p>
        <br></br>
        <p>
          In my spare time I like to create 3D illustrations and content for my{" "}
          <a href="https://www.youtube.com/channel/UCsx6kQZt0y3Ie5ob_cwQ5cQ">
            Youtube Channel
          </a>
          , drink lots of coffee, and getting lost in a good movie. You’ll
          likely catch me watching Lord of the Rings, or admiring a bunch of
          design work on Dribbble.
        </p>

        <Link to="#portfolioGrid">
          <PrimaryButton>Recent Work</PrimaryButton>
        </Link>
      </div>
    </Container>
  )
}

export default About

const Container = styled.div`
  display: flex;

  text-align: left;
  padding: 25vh 0%;
  color: #f5f5f5;

  line-height: 1.8;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    padding: 20% 0;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    padding: 10vh 0;
    flex-direction: column;
  }

  div {
    flex: 1;
    padding: 1rem;

    display: flex;
    flex-direction: column;
  }

  div:nth-of-type(2) {
    a {
      text-decoration: none;
      font-weight: 700;
      color: #f5f5f5;
      transition: 0.3s ease 0s;
      padding: 1rem 0;

      &:hover {
        padding-left: 1rem;
      }
    }
  }

  h2 {
    font-weight: 400;
    font-size: 2.5rem;
    letter-spacing: 1px;
    text-align: left;
  }

  p {
    font-size: 1rem;
    text-align: justify;
    padding: 0;
    padding-top: 1rem;
  }

  p:nth-of-type(2) {
    padding-bottom: 1rem;
  }
`
