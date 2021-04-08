import React from "react"
import styled from "styled-components"

function SecondaryButton({ children }) {
  return <SecondaryBtn>{children}</SecondaryBtn>
}

export default SecondaryButton

const SecondaryBtn = styled.button`
  color: ${props => props.theme.dark.secondaryColor};
  background: none;
  padding: 1.2rem 4rem;
  border: none;
  font-size: 0.9rem;
  margin: 2rem 1rem 2rem 0;

  transition: 0.3s ease 0s;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.dark.secondaryColor};
    color: ${props => props.theme.dark.primaryColor};
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    padding: 1.2rem 1rem;
  }
`
