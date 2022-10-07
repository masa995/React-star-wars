import React from "react";
import { NavLink } from "react-router-dom";

import { FavoritesLink } from "../index";

import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header__container}>
      <div className={`${style.header__inner} container`}>
        <ul className={style.header__list}>
          <li className={style.header__item}>
            <NavLink end to={"/"}>Home</NavLink>
          </li>

          <li className={style.header__item}>
            <NavLink to={"/people/?page=1"}>People</NavLink>
          </li>
        </ul>
        <FavoritesLink />
      </div>
    </header>
  )
}

export default Header;