import React from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "../../HOChelper/withErrorApi"

import { PeopleList } from "../../components/index.js";

import { SWAPI_API_PEOPLE, SWAPI_PEOPLE } from "../../constants/api.js";
import { getAPIresponse } from "../../untils/api.js"
import { getId, getPeopleImage } from "../../untils/PeopleData.js";

//import style from "./People.module.css"

const People = ({ setErrorApi }) => {

  const [people, setPeople] = React.useState(null);

  React.useEffect(() => {
    //async / await  тоже возвращает Promise и с ним работает 
    const getResponse = async (url) => {
      const response = await getAPIresponse(url);

      if (response) {
        const listPeople = response.results.map((obj) => {
          const id = getId(obj.url, SWAPI_PEOPLE);
          const urlIMG = getPeopleImage(id);

          return {
            id,
            urlIMG,
            name: obj.name,
          }
        });

        setPeople(listPeople);
        setErrorApi(false); //сервер хорошо отработал
      } else {
        setErrorApi(true); //сервер отработал с ошибкой
      }
    }

    getResponse(SWAPI_API_PEOPLE);
  }, [setErrorApi]);

  return (
    <>
      <h1 className="header-text">People</h1>
      {
        people &&
        <PeopleList
          people={people}
        />
      }
    </>

  )
}

People.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(People);
