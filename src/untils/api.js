// export const getAPIresponse = (url) => {
//   fetch(url).then((res) => res.json())
//     .then((body) => console.log(body))
//     .catch((e) => console.log(e.massage));
// }

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

