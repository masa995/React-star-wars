import React from "react";
import { Video } from "../../components";

import video from "../../static/video/video.mp4";
import style from "./Home.module.css";

const Home = () => {
  return (
    <>
      <h1 className="header-text">Home</h1>

      <Video src={video} />

      <p className={style.text}>
        A long time ago, in a galaxy far, far away…
      </p>
    </>
  )
}

export default Home;