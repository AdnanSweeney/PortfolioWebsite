import React from "react"
import github from "../assets/githubIcon.svg"
import gmail from "../assets/gmailIcon.svg"
import linkedin from "../assets/linkedinIcon.svg"
import IconLink from "../components/iconLink"
import linksList from "../assets/links.json"
import resume from "../assets/Resume.pdf"
import asLogo from "../assets/asLogo.svg"
import links from "../assets/links.json"

export default function Home() {
  let icons = {
    linkedin: linkedin,
    github: github,
    gmail: gmail,
  }

  return (
    <div className="container">
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <title> Adnan Sweeney </title>

      <header className="white-text header">
        <div className="header-icon-container">
          <img className="header-icon" src={asLogo} alt="AS Logo" />
        </div>
        <div className="header-links-container">
          <a href={resume}>
            <p className="header-link"> Resume </p>
          </a>
          <p className="header-link"> Projects </p>
          <p className="header-link"> Contact </p>
        </div>
      </header>

      <div>
        <p class="title white-text"> Adnan Sweeney </p>
      </div>

      <div>
        <p class="description white-text">
          I like making responsive web tools like
          <a href={links.project[0].link} style={{ color: "#477eff" }}>
            {" "}
            {links.project[0].id}{" "}
          </a>
        </p>
      </div>

      <div class="flex-icons-container">
        {linksList.contact.map(contactMedium => {
          return (
            <IconLink
              icon={icons[contactMedium.id]}
              alt={contactMedium.alt}
              link={contactMedium.link}
            />
          )
        })}
      </div>
    </div>
  )
}
