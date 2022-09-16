import { HTTP, HTTPS } from "../constants/api";

export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
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

// export const getAPIresponse = (url) => {
//   fetch(url).then((res) => res.json())
//     .then((body) => console.log(body))
//     .catch((e) => console.log(e.massage));
// }

