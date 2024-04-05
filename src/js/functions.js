function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function saveDataInStorage(key, value) {
  localStorage.setItem(key, value);
}

function getDataFromStorage(key) {
  const data = localStorage.getItem(key);
  return data;
}

export { getRandomHexColor, saveDataInStorage, getDataFromStorage };
