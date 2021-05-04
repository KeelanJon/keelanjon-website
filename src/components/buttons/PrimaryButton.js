import React from "react"
import styled from "styled-components"

function PrimaryButton(props) {
  return <PrimaryBtn>{props.children}</PrimaryBtn>
}

export default PrimaryButton

const PrimaryBtn = styled.button`
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
