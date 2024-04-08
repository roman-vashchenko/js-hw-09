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

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds, convertMs };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

export {
  getRandomHexColor,
  saveDataInStorage,
  getDataFromStorage,
  convertMs,
  addLeadingZero,
};
