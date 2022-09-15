import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header__container}>
      <div className="container">
        <ul className={style.header__list}>
          <li className={style.header__item}>
            <NavLink end to={"/"}>Home</NavLink>
          </li>

          <li className={style.header__item}>
            <NavLink to={"/people"}>People</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;