import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import PrimaryButton from "../components/buttons/PrimaryButton"

import FlexBox from "../components/FlexBox/FlexBox"
import Contact from "../components/Contact"

//Variables

const webDevSkills = [
  "HTML/CSS",
  "JavaScript",
  "ReactJS",
  "GatsbyJS",
  "Styled Components",
  "WordPress",
  "Node",
  "Netlify",
  "Git",
]

const uxSkills = [
  "Figma",
  "Adobe XD",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Affinity Photo",
  "Blender 3D",
]

const otherSkills = ["Google Analytics", "Knowledge of SEO", "Keyword Research"]
const videoSkills = ["Davinci Resolve", "Adobe Premier Pro"]

//Note to self as you recently had a confusing bug!
//Your css in your components will not work unless you
//wrap your page in the layout component to supply the theme component

function about() {
  return (
    <Layout>
      <PageHeader
        header="Here’s a little more about me"
        subheader="I see you've taken the blue pill"
        buttonURL="#about"
      />

      <StyledSection id="about">
        <FlexBox align="flex-start" justfiy="space-between">
          <ContentWrapper>
            <h2>What I can offer</h2>
          </ContentWrapper>
          <ContentWrapper>
            <p>
              Hi I’m Keelan, I am a developer with a keen interest in Front End
              Development and a passion for being creative, artistic and minimal
              design. I have skils and interests in a wide variety of areas,
              from Front End Development, UI/UX design, WordPress and 3D
              illustration.
              <br />
              <br />
              My current favourite webstack includes React, Gatsby, Styled
              Components and Netlify, and I generally use WordPress when working
              with local clients who’d like more control over their website.
              <br />
              <br />I have experience managing projects, working and liasing
              with clients to help overcome digital barriers, design creative
              solutions, and promote better search engine optimisation. I am
              currently focused on Front End Development but am seeking a role
              that challenges my skills, values creativity and good design, and
              helps me pursue a career in full stack and user experience design.
              <br />
              <br />
              I’m also a big Lord of the Rings fan.
            </p>
            <Link to="#tools">
              <PrimaryButton>My Tools</PrimaryButton>
            </Link>
          </ContentWrapper>
        </FlexBox>
      </StyledSection>

      <StyledSection id="tools">
        <FlexBox>
          <ContentWrapper>
            <h3>Web Development</h3>
            <ul>
              {webDevSkills.map(function (skill, index) {
                return <li id={index}>{skill}</li>
              })}
            </ul>
          </ContentWrapper>
          <ContentWrapper>
            <h3>UI/UX Skills</h3>
            <ul>
              {uxSkills.map(function (skill, index) {
                return <li id={index}>{skill}</li>
              })}
            </ul>
          </ContentWrapper>

          <ContentWrapper>
            <h3>Video Editing</h3>
            <ul>
              {videoSkills.map(function (skill, index) {
                return <li id={index}>{skill}</li>
              })}
            </ul>
          </ContentWrapper>
          <ContentWrapper>
            <h3>SEO/Other</h3>
            <ul>
              {otherSkills.map(function (skill, index) {
                return <li id={index}>{skill}</li>
              })}
            </ul>
          </ContentWrapper>
        </FlexBox>
      </StyledSection>
      <Contact />
    </Layout>
  )
}

export default about

const Container = styled.section``

const StyledSection = styled.section`
  padding: 10vh 0;
`

const ContentWrapper = styled.div`
  flex: 1;

  h2 {
    font-size: ${props => props.theme.fontSizes.medium};
  }

  h3 {
    font-weight: 500;
    padding: 2rem 0;
  }

  p:nth-of-type(1) {
    padding-top: 0;
    text-align: justify;
  }

  li {
    font-size: 1rem;
    padding: 0.5rem 0;
    list-style: none;
  }
`
