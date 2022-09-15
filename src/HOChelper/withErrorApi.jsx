import React from "react";

import { ErrorMessage } from "../components/";

//HOC - это ф-ция в которую, оборачивают компонент (View)
//Позволяет не дублировать код

export const withErrorApi = (View) => {
  return (props) => {
    const [errorApi, setErrorApi] = React.useState(false);

    return (
      <>
        {
          errorApi ?
            (<ErrorMessage />)
            :
            (<View
              setErrorApi={setErrorApi}
              {...props} //нужно обязательно передовать все пропсы
            />)
        }
      </>

    )
  }
}

export default withErrorApi;