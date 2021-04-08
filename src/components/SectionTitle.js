import React from "react"
import styled from "styled-components"

function SectionTitle({ children }) {
  return <TitleContainer>{children}</TitleContainer>
}

export default SectionTitle

const TitleContainer = styled.div`
  margin: auto auto;
  max-width: 800px;

  h2 {
    font-size: ${props => props.theme.fontSizes.large};
  }
  p {
    font-size: ${props => props.theme.fontSizes.bodyText};
    max-width: 600px;
  }
`
