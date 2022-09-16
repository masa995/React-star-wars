import { useLocation } from "react-router-dom"

export const useQueryParams = () => {
  //search -  часть адреса после символа ?, включая символ ?
  return new URLSearchParams(useLocation().search)
}