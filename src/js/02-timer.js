import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { convertMs, addLeadingZero } from '../js/functions';

const refs = {
  input: document.getElementById('datetime-picker'),
  btn: document.querySelector('button'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.btn.addEventListener('click', onStartTime);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    getTime.call(options, selectedDates[0]);
  },
};

flatpickr(refs.input, options);

const DELAY = 1000;
let timerId = null;
let selectedTime = 0;

function getTime(date) {
  if (date > this.defaultDate) {
    selectedTime = date;
    refs.btn.disabled = false;
    setTimer();
  } else {
    Notify.info('Please choose a date in the future');
  }
}

function onStartTime() {
  setTimer();

  timerId = setInterval(setTimer, DELAY);
}

function setTimer() {
  const currentDate = Date.now();
  const diff = selectedTime - currentDate;
  outputTimerValue(convertMs(diff));
  if (diff < 1000) {
    clearInterval(timerId);
    return;
  }
}

function outputTimerValue({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}
