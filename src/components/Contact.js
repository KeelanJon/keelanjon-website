import React from "react"
import styled from "styled-components"

function Contact() {
  return (
    <ContactContainer>
      <h4>Let's work together</h4>
      <h2>info@keelsdesign.co.uk</h2>
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.div`
  padding: 10% 0;

  h2 {
    font-size: 4rem;
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
