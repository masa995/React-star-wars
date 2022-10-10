import React from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux";

import { addFavorite, removeFavorite } from "../../../redux/slices/favoriteSlice";

import style from "./PersonFavorite.module.css";
import starActive from "../../../static/img/star-active.svg";
import starInert from "../../../static/img/star-inert.svg"

const PersonFavorite = ({ id, personPhoto, personName, personFavorite, setPersonFavorite }) => {
  const dispatch = useDispatch();

  const obj = {
    id,
    name: personName,
    urlIMG: personPhoto
  }

  const handleClick = () => {
    if (personFavorite) {
      dispatch(removeFavorite({ id }))
      setPersonFavorite(false)
    } else {
      dispatch(addFavorite({ obj }))
      setPersonFavorite(true)
    }

  }

  return (
    <>
      <button
        className={style.star}
        onClick={handleClick}
        aria-label="Add favorite"
      >
        <img
          className={style.star__img}
          src={personFavorite ? starActive : starInert} alt="Add favorite" />
      </button>
    </>

  )
}

PersonFavorite.propTypes = {
  id: PropTypes.string,
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func
}

export default PersonFavorite
