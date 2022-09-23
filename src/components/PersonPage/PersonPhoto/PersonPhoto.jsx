import React from "react"
import PropTypes from "prop-types"

import style from "./PersonPhoto.module.css"

const PersonPhoto = ({ personPhoto, personName }) => {
  return (
    <div className={style.container}>
      <img
        src={personPhoto}
        alt={personName}
        className={style.photo}
      />
    </div>
  )
}

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string
}

export default PersonPhoto
