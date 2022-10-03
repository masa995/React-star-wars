import React from "react"
import { Link, useNavigate } from "react-router-dom";

import style from "./PersonGoBack.module.css";
import backSVG from "../../../static/img/back.svg"

const PersonGoBack = () => {
  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  }

  const navigate = useNavigate();

  return (
    <Link
      className={style.link}
      onClick={handleGoBack}
      to="#"
    >
      <img
        src={backSVG}
        alt="Go back"
        className={style.link__img}
      />

      Go back
    </Link>
  )
}

export default PersonGoBack
