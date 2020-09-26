import React from "react"
import github from "../assets/githubIcon.svg"
import gmail from "../assets/gmailIcon.svg"
import linkedin from "../assets/linkedinIcon.svg"
import IconLink from "../components/iconLink"
import linksList from "../assets/links.json"
import resume from "../assets/Resume.pdf"

export default function Home() {
  let icons = {
    linkedin: linkedin,
    github: github,
    gmail: gmail,
  }

  return (
    <div className="container">
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <header className="white-text header">
        <a href={resume}>
          <p className="header-link"> Resume </p>
        </a>
        <p className="header-link"> Projects </p>
        <p className="header-link"> Contact </p>{" "}
      </header>

      <div>
        <p class="title white-text"> Adnan Sweeney </p>
      </div>

      <div>
        <p class="description white-text">
          I like making responsive web tools like manaculator.surge.sh
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
