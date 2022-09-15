import {
  HTTPS, SWAPI_ROOT,
  GUIDE_URL_IMG_PEOPLE, GUIDE_IMG_EXTENSION
} from "../constants/api";

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