import React from "react"
import debounce from "lodash.debounce";
import PropTypes from "prop-types"

import { withErrorApi } from "../../HOChelper/withErrorApi";
import { SearchInfo, InputText, Loader } from "../../components";

import { getAPIresponse } from "../../untils/api";
import { getId, getPeopleImage } from "../../untils/PeopleData";
import { SWAPI_PEOPLE, SWAPI_API_SEARCH } from "../../constants/api";

const Search = ({ setErrorApi }) => {
  const [valueSearch, setValueSearch] = React.useState('');
  const [peopleSearch, setPeopleSearch] = React.useState([]);
  const [loader, setLoader] = React.useState(false);

  const getResponseSearch = React.useCallback(async (param) => {
    setLoader(true);
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
      setLoader(false);
    } else {
      setErrorApi(true);
    }
  }, [setErrorApi]);

  const debouncedGetResponse = React.useCallback(
    debounce(value => getResponseSearch(value), 250), []);

  React.useEffect(() => {
    //'' - 10 первых элементов
    getResponseSearch('')
  }, [])

  const handleChangeValue = (value) => {
    setValueSearch(value);
    debouncedGetResponse(value);
  }

  return (
    <>
      <h1 className="header-text">Search</h1>

      <InputText
        value={valueSearch}
        handleChangeValue={handleChangeValue}
        placeholder="Input character name"
      />

      {
        loader ? (
          <Loader />
        ) : (
          <SearchInfo people={peopleSearch} />
        )
      }

    </>
  )
}

Search.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(Search)
