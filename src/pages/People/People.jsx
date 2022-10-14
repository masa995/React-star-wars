import React from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "../../HOChelper/withErrorApi"
import { useQueryParams } from "../../hooks/useQueryParams";

import { PeopleList, PeopleNavigate, Loader } from "../../components/index.js";

import { SWAPI_API_PEOPLE, SWAPI_PEOPLE } from "../../constants/api.js";
import { getAPIresponse, changeHTTP } from "../../untils/api.js"
import { getId, getPeopleImage, getPeoplePageId } from "../../untils/PeopleData.js";

const People = ({ setErrorApi }) => {

  const [people, setPeople] = React.useState(null);
  const [prevPage, setPrevPage] = React.useState(null);
  const [nextPage, setNextPage] = React.useState(null);
  const [counterPage, setCounterPage] = React.useState(1); //номер текущей страницы

  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResponse = React.useCallback(async (url) => {
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

      setCounterPage(getPeoplePageId(url));
      setPeople(listPeople);
      setPrevPage(changeHTTP(response.previous));
      setNextPage(changeHTTP(response.next));

      setErrorApi(false); //сервер хорошо отработал
    } else {
      setErrorApi(true); //сервер отработал с ошибкой
    }
  }, [setErrorApi]);

  React.useEffect(() => {
    getResponse(SWAPI_API_PEOPLE + queryPage);
  }, [getResponse]);

  return (
    <>
      <PeopleNavigate
        getResponse={getResponse}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />

      {
        people ?
          (<PeopleList
            people={people}
          />
          ) : (
            <Loader />
          )
      }
    </>
  )
}

People.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(People);
