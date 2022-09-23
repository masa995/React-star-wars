import React from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

import notFound from "../../static/img/not-found.jpg"

import style from "./NotFound.module.css"

const NotFound = () => {
  let location = useLocation(); // Хук useLocation возвращает объект location, представляющий текущий URL.
  return (
    <div className="container">
      <div className={style.not_found}>
        <img
          className={style.not_found__img}
          src={notFound}
          alt="Not found"
        />

        <Link
          className={style.not_found__link}
          to={"/"}
        >
          Back
        </Link>

        <p
          className={style.not_found__text}
        >{`Not found ${location.pathname}`}</p>
      </div>
    </div>

  )
}

export default NotFound;