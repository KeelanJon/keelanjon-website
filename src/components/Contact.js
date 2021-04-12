import React from "react"
import styled from "styled-components"

function Contact() {
  return (
    <ContactContainer id="contact">
      {/* <h4>Let's work together</h4> */}
      <h2>info@keelsdesign.co.uk</h2>
      <p>
        I’m available for freelance projects or for hire. Let’s work together on
        your next project.
      </p>
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.div`
  padding: 20vh 0;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    padding: 10vh 0;
  }

  h2 {
    font-size: 5vh;
    font-weight: 500;

    @media screen and (max-width: ${props =>
        props.theme.screenDimensions.mobile}) {
      font-size: 1.5rem;
    }
  }

  h4 {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 300;
    font-family: "Roboto", sans-serif;
    background: none;
    padding: 1rem 0;
  }
`
