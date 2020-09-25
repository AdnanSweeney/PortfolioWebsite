import React from "react"
import github from "../assets/githubIcon.svg"
import gmail from "../assets/gmailIcon.svg"
import linkedin from "../assets/linkedinIcon.svg"

export default function Home() {
  return (
    <div class="container">
     <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet" />


      <header class="white-text header"> 
        <p className="header-link"> Resume </p>
        <p className="header-link"> Projects </p>
        <p className="header-link"> Contact </p> </header>

      <div>
        <p class="title white-text"> Adnan Sweeney </p>
      </div>

      <div>
        <p class="description white-text">
          I like making responsive web tools like manaculator.surge.sh
        </p>
      </div>

      <div class="flex-icons-container">
        <img src={linkedin} className="contact-logo" alt="Linkedin Icon" />
        <img src={github} className="contact-logo" alt="Github Icon" />
        <img src={gmail} className="contact-logo" alt="Gmail Icon" />
      </div>
    </div>
  )
}
