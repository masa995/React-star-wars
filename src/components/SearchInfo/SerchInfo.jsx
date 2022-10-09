import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import style from "./SearchInfo.module.css";

const SerchInfo = ({ people }) => {
  return (
    <>
      {people.length > 0 ? (
        <ul className={style.list}>
          {people.map(({ id, name, urlIMG }) => (
            <li
              className={style.list__item}
              key={id}
            >
              <Link
                className={style.list__link}
                to={`/people/${id}`}
              >
                <img
                  className={style.list__img}
                  src={urlIMG}
                  alt={name}
                />

                <p className={style.list__name}>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={style.list__no_data}>No data</h2>
      )}
    </>

  )
}

SerchInfo.propTypes = {
  people: PropTypes.array
}

export default SerchInfo
