import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import style from "./PeopleList.module.css";

const PeopleList = ({ people }) => {
  return (
    <ul className={style.list__container}>
      {
        people.map(({ id, name, urlIMG }) =>
          <li
            className={style.list__item}
            key={`${id}_${name}`}>
            <Link
              to={`/people/${id}`}>
              <div>
                <img
                  className={style.list__img_person}
                  src={urlIMG}
                  alt={name}
                />
                <p>
                  {name}
                </p>
              </div>
            </Link>
          </li>
        )
      }
    </ul >
  )
}

PeopleList.propTypes = {
  people: PropTypes.array
}

export default PeopleList;