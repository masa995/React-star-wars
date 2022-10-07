import React from "react"
import PropTypes from "prop-types"

import Loader from "../../Loader/Loader"
import { makeConcurrentRequest, changeHTTP } from "./../../../untils/api"

import style from "./PersonFilms.module.css"


const PersonFilms = ({ personFilms }) => {
  const [filmsArr, setFilmsArr] = React.useState(null);

  React.useEffect(() => {
    const requestFilms = async () => {
      const filmsHTTPS = personFilms.map((url) => changeHTTP(url));
      const response = await makeConcurrentRequest(filmsHTTPS);

      setFilmsArr(response);
    }
    requestFilms()
  }, [personFilms]);
  return (
    <div className={style.films}>
      {filmsArr ? (
        <ul className={style.films__list}>
          {filmsArr && filmsArr
            .sort((a, b) => a.episode_id - b.episode_id)
            .map(({ title, episode_id }) => (
              <li
                key={episode_id}
                className={style.films__item}
              >
                <span className={style.films__episode}>Episode {episode_id}</span>

                <span className={style.films__colon}> : </span>

                <span className={style.films__title}>{title}</span>
              </li>
            ))
          }
        </ul>
      ) : (
        <Loader />
      )

      }
    </div>
  )
}

PersonFilms.propTypes = {
  personFilms: PropTypes.array
}

export default React.memo(PersonFilms)