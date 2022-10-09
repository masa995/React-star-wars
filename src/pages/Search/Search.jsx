import React, { useCallback, useEffect } from "react"
import PropTypes from "prop-types"

import { withErrorApi } from "../../HOChelper/withErrorApi";
import { SearchInfo } from "../../components";

import { getAPIresponse } from "../../untils/api";
import { getId, getPeopleImage } from "../../untils/PeopleData";
import { SWAPI_PEOPLE, SWAPI_API_SEARCH } from "../../constants/api";

// import style from "./Search.module.css"

const Search = ({ setErrorApi }) => {
  const [valueSearch, setValueSearch] = React.useState('');
  const [peopleSearch, setPeopleSearch] = React.useState([]);

  const handleChangeValue = (e) => {
    const value = e.target.value;
    setValueSearch(value);
    getResponseSearch(value);
  }

  const getResponseSearch = useCallback(async (param) => {
    const responce = await getAPIresponse(SWAPI_API_SEARCH + param);

    if (responce) {
      const listPeople = responce.results.map(obj => {
        const id = getId(obj.url, SWAPI_PEOPLE);
        const urlIMG = getPeopleImage(id)

        return {
          id,
          name: obj.name,
          urlIMG
        }
      })

      setPeopleSearch(listPeople);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  }, [setErrorApi])

  useEffect(() => {
    //'' - 10 первых элементов
    getResponseSearch('')
  }, [getResponseSearch])

  return (
    <>
      <h1 className="header-text">Search</h1>
      <input
        type="text"
        value={valueSearch}
        onChange={handleChangeValue}
        placeholder="Input character name"
      />
      <SearchInfo people={peopleSearch} />
    </>
  )
}

Search.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(Search)
