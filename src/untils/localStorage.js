export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);

  if (data !== null) {
    return JSON.parse(data) //преобразуем в объект
  }

  return []
}

export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}