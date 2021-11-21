import React from "react"
import styled from "styled-components"
import PrimaryButton from "./buttons/PrimaryButton"
import { Link } from "gatsby"

function Contact(props) {
  function goToTop() {
    document.body.scrollTop = 0 //For safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  return (
    <ContactContainer id="contact">
      <div>
        <h2>info@keelsdesign.co.uk</h2>
        <p>
          {/* I’m available for freelance projects or for hire. Let’s work together
          on your next project. */}
          I'm available for freelance projects and commisions. Let's work
          together on your next project.
        </p>
      </div>
      <div>
        <ToTopButton
          onClick={function () {
            goToTop()
          }}
        >
          Back to top
        </ToTopButton>
      </div>
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 20vh 0;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    padding: 25vh 0;
    padding-bottom: 10vh;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    flex-direction: column;
  }

  p {
    font-size: ${props => props.theme.fontSizes.small};
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

const ToTopButton = styled.button`
  background: none;
  text-transform: uppercase;
  border: none;
  letter-spacing: 4px;
  font-weight: 300;
  font-size: 12px;
  cursor: pointer;

  padding: 2rem 0rem;

  transition: 0.3s ease 0s;

  &:hover {
    letter-spacing: 5px;
    opacity: 0.5;
  }
`
