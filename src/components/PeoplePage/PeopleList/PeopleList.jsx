import React from "react";
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
            <a href="http://localhost:3000/">
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
            </a>
          </li>
        )
      }
    </ul>
  )
}

PeopleList.propTypes = {
  people: PropTypes.array
}

export default PeopleList;