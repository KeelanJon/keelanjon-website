import React from "react"
import styled from "styled-components"
import FlexBox from "../FlexBox/FlexBox"
import PrimaryButton from "../buttons/PrimaryButton"

function ProjectDescription(props) {
  return (
    <StyledSection>
      <FlexBox>
        <ContentWrapper>
          <h2>Key Features</h2>
          <ul>
            {props.features.map(function (item, index) {
              return <li id={index}>{item}</li>
            })}
          </ul>
        </ContentWrapper>
        <ContentWrapper>
          <h2>Overview</h2>
          <p>{props.description}</p>
          <a href={props.buttonURL}>
            <PrimaryButton style={{ margin: "0 2rem 0 0" }}>
              {props.buttonText}
            </PrimaryButton>
          </a>
          <a href={props.buttonURL2}>
            <PrimaryButton>{props.buttonText2}</PrimaryButton>
          </a>
        </ContentWrapper>
      </FlexBox>
    </StyledSection>
  )
}

export default ProjectDescription

const StyledSection = styled.section`
  padding: 10vh 0;
`
const ContentWrapper = styled.div`
  flex: 1;
  min-width: 400px;

  h2 {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 4px;
    padding-bottom: 1rem;
  }

  p {
    text-align: justify;
  }

  li {
    text-decoration: none;
    font-size: 1rem;
    padding: 0.8rem 0;
    font-weight: 300;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    padding-bottom: 4rem;
  }
`
