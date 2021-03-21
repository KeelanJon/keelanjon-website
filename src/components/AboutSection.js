import React from "react"
import styled from "styled-components"
import BackgroundCircle from "../components/BackgroundCircle"

export default function AboutSection() {
  return (
    <AboutContainer>
      <TextContainer>
        <SubHeader>Dare you tumble down the rabbit hole</SubHeader>
        <Title>
          I’m a design and developer based near Cardiff, South Wales. I have a
          keen interest in Front End Development, a passion for tech, 3D
          illustration and being creative.
        </Title>

        <p>Interested in lerning more?</p>
      </TextContainer>
      <BackgroundCircle top="0vh" left="-20vw" />
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  position: relative;
  height: 60vh;
  text-align: center;
  padding: 10% 10%;
  display: grid;
  place-items: center;
  z-index: 1;
  background: none;
`

const TextContainer = styled.div`
  position: relative;
  max-width: 1920px;
  z-index: 2;
  background: none;

  * {
    background: none;
  }
`

const SubHeader = styled.h4`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
`

const Title = styled.h2`
  font-size: 4rem;
  padding: 3rem 0rem;
  background: none;
  line-height: 1.4;

  @media screen and (max-width: 1440px) {
    font-size: 2.75rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`
