import React from "react"

function SkillsSection() {
  return (
    <SkillsContainer>
      <TextContainer>
        <SubHeader></SubHeader>
        <Title>Skills & Hobbies</Title>
      </TextContainer>
    </SkillsContainer>
  )
}

export default SkillsSection

const SkillsContainer = styled.div`
  position: relative;
  height: 60vh;
  text-align: center;
  padding: 0% 5%;
  display: grid;
  place-items: center;
  z-index: 1;
`

const TextContainer = styled.div`
  position: relative;
  max-width: 1920px;
  z-index: 2;
  background: none;

  * {
    background: none;
  }
`
