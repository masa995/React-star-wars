import React from "react"
// import PropTypes from "prop-types"

import style from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={style.container}>
      <div className={style.wheel}></div>
    </div>
  )
}

// Loader.propTypes = {}

export default Loader
