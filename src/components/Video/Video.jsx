import React from "react";
import PropTypes from "prop-types";

import style from "./Video.module.css";

const Video = ({ src }) => {
  return (
    <video
      className={style.video}
      src={src}
      muted
      loop
      autoPlay
    ></video>
  )
}

Video.propTypes = {
  src: PropTypes.string
}

export default Video
