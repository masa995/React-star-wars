import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";

import { withErrorApi } from "../../HOChelper/withErrorApi";
import { PersonInfo, PersonPhoto, PersonGoBack, PersonFilms, Loader } from "../../components/index.js";

import { SWAPI_API_PERSON } from "../../constants/api";
import { getAPIresponse } from "../../untils/api";
import { getPeopleImage } from "../../untils/PeopleData";

import style from "./Person.module.css";

const Person = ({ setErrorApi }) => {

  // useParams возвращает объект пар ключ / значение динамических параметров из текущего URL.

  const { id } = useParams();

  const [personInfo, setPersonInfo] = React.useState(null);
  const [personName, setPersonName] = React.useState(null);
  const [personPhoto, setPersonPhoto] = React.useState(null);
  const [personFilms, setPersonFilms] = React.useState(null);

  React.useEffect(() => {
    (async () => {

      const responce = await getAPIresponse(`${SWAPI_API_PERSON}${id}/`);

      if (responce) {
        setErrorApi(false);
        setPersonInfo([
          {
            title: "Gender", data: responce.gender
          },
          {
            title: "Height", data: responce.height
          },
          {
            title: "Mass", data: responce.mass
          },
          {
            title: "Hair Color", data: responce.hair_color
          },
          {
            title: "Eye Color", data: responce.eye_color
          },
          {
            title: "Skin Color", data: responce.skin_color
          },
          {
            title: "Birth Year", data: responce.birth_year
          }]);
        setPersonName(responce.name);
        setPersonPhoto(getPeopleImage(id));
        setPersonFilms(responce.films);

      } else {
        setErrorApi(true);
      }
    })();
  }, [setErrorApi, id]);

  return (
    <div className={style.wrapper} >
      <PersonGoBack />

      <div className={style.person__container}>
        {personPhoto ? (
          <>
            <h1 className={style.person__name}>{personName}</h1>

            <div className={style.person__box}>
              <PersonPhoto
                personPhoto={personPhoto}
                personName={personName}
              />

              {personInfo && <PersonInfo personInfo={personInfo} />}
              {personFilms && <PersonFilms personFilms={personFilms} />}
            </div>
          </>
        ) : (
          <Loader />
        )
        }
      </div>
    </div >
  )
}

Person.propType = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(Person);