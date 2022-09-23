import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import style from "./PeopleNavigate.module.css"

const PeopleNavigate = ({ getResponse, prevPage, nextPage, counterPage }) => {
  return (
    <div className={style.navigate__container}>
      <Link
        className={!prevPage ? `${style.navigate__link} disable` : style.navigate__link}
        to={`/people/?page=${counterPage - 1}`}
      >
        <div
          className={!prevPage ? `${style.navigate__link_elem} disable` : style.navigate__link_elem}
          onClick={() => getResponse(prevPage)}
        >
          Previous
        </div>
      </Link>

      <Link
        className={!nextPage ? `${style.navigate__link} disable` : style.navigate__link}
        to={`/people/?page=${counterPage + 1}`}
      >
        <div
          className={!nextPage ? `${style.navigate__link_elem} disable` : style.navigate__link_elem}
          onClick={() => getResponse(nextPage)}
        >
          Next
        </div>
      </Link>
    </div>
  )
}

PeopleNavigate.propTypes = {
  getResponse: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number
}

export default PeopleNavigate;