import React from "react"
import { useSelector } from "react-redux";

import { PeopleList } from "../../components/index";

import style from "./Favorites.module.css";

const Favorites = () => {
  const [favoritesPeople, setFavoritesPeople] = React.useState([])

  const favoritesArr = useSelector((state) => state.favorite.favoritesArr);

  React.useEffect(() => {
    setFavoritesPeople(favoritesArr);
  }, [favoritesArr])

  return (
    <>
      <h1 className="header-text">Favorites</h1>
      {favoritesArr.length > 0 ? (
        <PeopleList people={favoritesPeople} />
      ) : (
        <h2 className={style.text}>No data</h2>
      )}

    </>
  )
}

export default Favorites
