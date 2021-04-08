import React from "react"
import styled from "styled-components"
import SectionTitle from "./SectionTitle"
//Logo imports using webpack
import logo1 from "../images/ltmmh-logo.png"
import logo2 from "../images/bloodbikes-logo.png"
import logo3 from "../images/waleslink-logo.png"
import logo4 from "../images/vibe-logo.png"

function ClientsSection() {
  return (
    <Container>
      <SectionTitle>
        <h2>Awesome Clients</h2>
        <p>
          I’ve worked with awesome clients to help bring their imagination to
          life and growing their online presence
        </p>
      </SectionTitle>
      <LogosContainer>
        <a href="https://keelsdesign.co.uk">
          <img src={logo1} alt="Lets talk mens mental health logo" />
        </a>
        <a href="https://keelsdesign.co.uk">
          <img src={logo2} alt="Lets talk mens mental health logo" />
        </a>
        <a href="https://keelsdesign.co.uk">
          <img src={logo3} alt="Lets talk mens mental health logo" />
        </a>
        <a href="https://keelsdesign.co.uk">
          <img src={logo4} alt="Lets talk mens mental health logo" />
        </a>
      </LogosContainer>
      <a>Read my Client Feedback</a>
    </Container>
  )
}

export default ClientsSection

const Container = styled.section`
  width: 100%;
  text-align: center;
  padding: 20vh 0 !important;

  display: grid;
  place-items: center normal;

  padding: 10vh 0;

  > a {
    font-weight: 500;

    transition: 0.3s ease 0s;
    cursor: pointer;
    &:hover {
      padding-left: 1rem;
    }
  }
`

const LogosContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5% 0;

  img {
    width: 100%;
    height: auto;
  }
`
