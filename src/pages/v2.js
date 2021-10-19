import React from "react"
import github from "../assets/githubIcon.svg"
import gmail from "../assets/gmailIcon.svg"
import linkedin from "../assets/linkedinIcon.svg"
import IconLink from "../components/iconLink"
import linksList from "../assets/links.json"
import resume from "../assets/Resume.pdf"
import radnanLogoThin from "../assets/v2Logos/radnanLogoThin.svg"
import radnanLogoThick from "../assets/v2Logos/radnanLogoThick.svg"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 100px;
  background-color: #f8f8f8;
  font-family: Almarai;
  font-weight: bold;
  height: 100vh;
  overflow: hidden;
`

const StyledImage = styled.img`
  width: 60vw;
  position: absolute;
  top: 7.5vh;
  left: -15vw;
  transform: rotate(-20deg);
  overflow: hidden;
`

const Header = styled.div`
  font-size: 100px;
  margin-right: 10vw;
`

const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;
  margin-top: 15vh;
  align-items: flex-end;
`

const StyledLink = styled.a`
  font-size: 60px;
  color: #303030;
  text-decoration: none;

  &:hover {
    color: #303030;
    text-decoration: none;
    cursor: pointer;
    transform: translateX(-15px);
    transition: transform 0.4s ease;
  }

  &:after {
    content: "";
    position: absolute;
    width: 25%;
    transform: scaleX(0);
    margin-top: 80px;
    height: 8px;
    right: 100px;
    background-color: #303030;
    transform-origin: bottom right;
    transition: transform 0.4s ease;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom right;
  }
`

export default function Home() {
  let icons = {
    linkedin: linkedin,
    github: github,
    gmail: gmail,
  }

  return (
    <Container>
      <link
        href="https://fonts.googleapis.com/css2?family=Almarai:wght@200;300;400;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <StyledImage src={radnanLogoThin} />
      <img style={{ visibility: "hidden" }} src={radnanLogoThick} />
      <Header> I'm Adnan</Header>
      <ListItemContainer>
        <StyledLink>Work</StyledLink>
        <StyledLink href={resume}>Resume</StyledLink>
        <StyledLink>Contact</StyledLink>
      </ListItemContainer>
    </Container>
  )
}
