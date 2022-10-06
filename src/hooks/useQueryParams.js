import { useLocation } from "react-router-dom"

export const useQueryParams = () => {
  //search -  часть адреса после символа ?, включая символ ?
  //console.log(useLocation().search);

  return new URLSearchParams(useLocation().search)
}