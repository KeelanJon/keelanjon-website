import React from "react"
import styled from "styled-components"

function PrimaryButton({ children }) {
  return <PrimaryBtn>{children}</PrimaryBtn>
}

export default PrimaryButton

const PrimaryBtn = styled.button`
  color: ${props => props.theme.dark.primaryColor};
  padding: 1.2rem 4rem;
  border: none;
  font-size: 0.9rem;
  margin: 2rem 1rem 2rem 0;

  transition: 0.3s ease 0s;
  cursor: pointer;

  &:hover {
    filter: invert(1);
  }
`
