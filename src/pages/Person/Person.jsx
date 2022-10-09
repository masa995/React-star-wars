import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { withErrorApi } from "../../HOChelper/withErrorApi";
import { PersonGoBack, PersonPhoto, PersonFavorite, PersonInfo, PersonFilms, Loader } from "../../components/index.js";

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
  const [personFavorite, setPersonFavorite] = React.useState(false);
  const [personFilms, setPersonFilms] = React.useState(null);

  const storeData = useSelector((state) => state.favorite.favoritesArr);

  const getResponsePerson = React.useCallback(async () => {
    storeData.find(elem => elem.id === id) ? setPersonFavorite(true) : setPersonFavorite(false);//сохроняем состояние закладки - если есть в store true, иначе false

    const responce = await getAPIresponse(`${SWAPI_API_PERSON}${id}/`);

    if (responce) {
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
      setErrorApi(false);

    } else {
      setErrorApi(true);
    }
  }, [setErrorApi, storeData, id])

  React.useEffect(() => {
    getResponsePerson();
  }, [getResponsePerson]);

  return (
    <div className={style.wrapper} >
      <PersonGoBack />

      <div className={style.person__container}>
        {personPhoto ? (
          <>
            <h1 className={style.person__name}>{personName}</h1>

            <div className={style.person__box}>
              <div className={style.person__box_img}>
                <PersonPhoto
                  personPhoto={personPhoto}
                  personName={personName}
                />

                <PersonFavorite
                  id={id}
                  personPhoto={personPhoto}
                  personName={personName}
                  personFavorite={personFavorite}
                  setPersonFavorite={setPersonFavorite}
                />
              </div>

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