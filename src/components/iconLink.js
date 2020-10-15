import React from "react"
import iconLinkStyles from "./iconLink.module.css"

export default function IconLink(props) {

  return (
    <a href={props.link} className={iconLinkStyles.iconLink}>
      <img
        src={props.icon}
        className={iconLinkStyles.iconLinkIcon}
        alt={props.alt}
      />
    </a>
  )
}
