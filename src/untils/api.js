import { HTTP, HTTPS } from "../constants/api";

export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
}

export const makeConcurrentRequest = async (arrURL) => {
  const response = await Promise.all(arrURL.map((response) => {
    return fetch(response).then((response) => response.json())
  }));
  return response;
}

export const getAPIresponse = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(response.status);
      return false;
    }

    const body = await response.json();
    return body
  } catch (e) {
    console.error(e.massage);
    return false;
  }
}

