import {
  HTTPS, SWAPI_ROOT, SWAPI_PARAM_PAGE,
  GUIDE_URL_IMG_PEOPLE, GUIDE_IMG_EXTENSION
} from "../constants/api";

//-----------------------------------------------
// Получить ID страницы по URL
//-----------------------------------------------
export const getPeoplePageId = (url) => {
  // const result = url.replace(SWAPI_API_PEOPLE, '');
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
  const id = url.slice(pos + SWAPI_PARAM_PAGE.length);

  return Number(id);
}
//-----------------------------------------------
// Получить ID персонажа по URL
//-----------------------------------------------
export const getId = (url, category) => {
  const id = url
    .replace(HTTPS + SWAPI_ROOT + category, '')
    .replace(/\//g, '')

  return id;
}

//-----------------------------------------------
// Получить изображение для персонажа
//-----------------------------------------------
export const getPeopleImage = id => `${GUIDE_URL_IMG_PEOPLE}/${id + GUIDE_IMG_EXTENSION}`;