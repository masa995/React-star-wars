import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../static/img/bookmark.svg"
import style from "./FavoritesLink.module.css"

const FavoritesLink = () => {
  const [count, setCount] = React.useState(0)
  const favoritesArr = useSelector((state) => state.favorite.favoritesArr)

  React.useEffect(() => {
    setCount(favoritesArr.length);

    if (favoritesArr.length > 99) {
      setCount("...");
    }
  }, [favoritesArr])

  return (
    <Link
      className={style.link}
      to={"/favorites"}
    >
      <img
        className={style.link__img}
        src={logo}
        alt="Favorites"
      />

      <span className={style.link__counter}>{count}</span>
    </Link>

  )
}

export default FavoritesLink
