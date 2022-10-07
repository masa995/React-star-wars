import React from "react"
import PropTypes from "prop-types";

import style from "./PersonInfo.module.css"

const PersonInfo = ({ personInfo }) => {
  return (
    <div className={style.wrapper}>
      <ul className={style.person_info__list}>
        {personInfo.map(({ title, data }) => (
          data && (
            <li
              key={title}
              className={style.person_info__item}
            >
              <span className={style.person_info__title}>{title}</span> : {data}
            </li>
          )
        ))}
      </ul>
    </div>
  )
}

PersonInfo.propTypes = {
  personInfo: PropTypes.array
}

export default React.memo(PersonInfo)