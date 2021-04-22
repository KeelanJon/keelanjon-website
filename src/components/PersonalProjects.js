import React from "react"
import styled from "styled-components"

//image imports
import TaskAppImage from "../images/taskapp-thumbnail.png"
import quizappImage from "../images/quizapp-thumbnail.png"
import websiteImage from "../images/personalwebsite-thumbnail.png"

function PersonalProjects() {
  return (
    <Container>
      <StyledText>
        <h4>Some stuff I coded</h4>
        <h2>Personal Projects</h2>
      </StyledText>
      <CardWrapper>
        <StyledCard>
          <a href="https://github.com/KeelanJon/keelanjon-taskapp">
            <h5>Personal Task & Productivity App</h5>
            <p>
              A personal task app coded in ReactJS to help monitor my daily
              productivity
            </p>
            <img src={TaskAppImage} />
          </a>
        </StyledCard>
        <StyledCard>
          <a href="https://github.com/KeelanJon/javascript-quizapp">
            <h5>Javascript Quiz</h5>
            <p>Think you have what it takes to pass the JavaScript quiz?</p>
            <img src={quizappImage} />{" "}
          </a>
        </StyledCard>
        <StyledCard>
          <a href="https://github.com/KeelanJon/keelanjon-website">
            <h5>Personal Website</h5>
            <p>
              This is my new developer website built with React and Gatsby, hey
              you're currently on it!
            </p>
            <img src={websiteImage} />{" "}
          </a>
        </StyledCard>
      </CardWrapper>
    </Container>
  )
}

export default PersonalProjects

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding: 25% 0;

  h2 {
    font-size: 2rem;
  }
`

const StyledText = styled.div`
  flex: 1;
  width: 100%;
`

const CardWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const StyledCard = styled.div`
  padding: 1.5rem 0;

  &:nth-of-type(1) {
    padding-right: 2rem;
  }

  a {
    text-decoration: none;
  }

  h5 {
    font-size: 1.2rem;
  }

  cursor: pointer;

  img {
    transition: 0.6s ease 0s;
  }
  &:hover {
    img {
      transform: scale(0.95);
    }
  }
`
