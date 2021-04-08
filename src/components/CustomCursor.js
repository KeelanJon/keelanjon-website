import React, { useState, useEffect } from "react"
import styled from "styled-components"

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    addEventListeners()
    return () => removeEventListeners()
  }, [])

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove)
  }

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove)
  }

  const onMouseMove = e => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <CursorContainer
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></CursorContainer>
  )
}

export default CustomCursor

const CursorContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 60px;
  height: 60px;
  border: 2px solid white;
  border-radius: 50%;
  pointer-events: none;
  overflow: hidden;
  transform: translate(-50%, -50%);
  background: none;
  transition: 0.03s ease 0s;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    display: none;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    display: none;
  }
`
