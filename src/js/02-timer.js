import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.getElementById('datetime-picker');

const btn = document.querySelector('button');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log(options.defaultDate);
    if (selectedDates[0].getTime() > options.defaultDate.getTime()) {
      btn.disabled = false;
    }
  },
};

const calendar = flatpickr(inputEl, options);
