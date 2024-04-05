import {
  getRandomHexColor,
  saveDataInStorage,
  getDataFromStorage,
} from '../js/functions';

const refs = {
  bodyEl: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

if (getDataFromStorage('color') !== null) {
  refs.bodyEl.style.backgroundColor = getDataFromStorage('color');
}

const DELAY = 1000;

let timerId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    refs.bodyEl.style.backgroundColor = color;
    saveDataInStorage('color', color);
  }, DELAY);
}

function onStopBtnClick() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(timerId);
}
