import React from "react"
import iconLinkStyles from "./iconLink.module.css"

export default function IconLink(props) {

  return (
    <a href={props.link}>
      <img
        src={props.icon}
        className={iconLinkStyles.iconLink}
        alt={props.alt}
      />
    </a>
  )
}
