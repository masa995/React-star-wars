import React from "react";
import PropTypes from "prop-types";

import close from "../../static/img/close.svg";
import style from "./InputText.module.css";

const InputText = ({ value, handleChangeValue, placeholder }) => {
  return (
    <div className={style.input}>
      <input
        className={style.input__field}
        type="text"
        value={value}
        onChange={(e) => handleChangeValue(e.target.value)}
        placeholder={placeholder}
      />

      {value && <button
        className={style.input__btn}
        aria-label="Clear input"
        onClick={() => handleChangeValue('')}
      >
        <img
          src={close}
          alt="Clear input"
          className={style.input__img}
        />
      </button>}
    </div>
  )
}

InputText.propTypes = {
  value: PropTypes.string,
  handleChangeValue: PropTypes.func,
  placeholder: PropTypes.string
}

export default InputText
