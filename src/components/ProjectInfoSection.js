import React from "react"
import styled from "styled-components"

function ProjectInfoSection(props) {
  return (
    <StyledSection id="projectInfo">
      <InfoColumn>
        <h5>Author</h5>
        <p>{props.author}</p>
      </InfoColumn>
      <InfoColumn>
        <h5>Date</h5>
        <p>{props.date}</p>
      </InfoColumn>
      <InfoColumn>
        <h5>Category</h5>
        <p>{props.category}</p>
      </InfoColumn>
      <InfoColumn>
        <h5>Technologies</h5>
        <p>{props.technology}</p>
      </InfoColumn>
    </StyledSection>
  )
}

export default ProjectInfoSection

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 5vh 0;
`
const InfoColumn = styled.div`
  padding-right: 3rem;
  max-width: 300px;

  h5 {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 4px;
  }

  p {
    font-size: ${props => props.theme.fontSizes.small};
    padding-top: 1rem;
    line-height: 2;
  }
`
