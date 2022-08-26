// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const selector = document.querySelector('#datetime-picker');

const timer = document.querySelector('.timer');

const field = Array.from(document.querySelectorAll('.field'));

const value = Array.from(document.querySelectorAll('.value'));

const label = Array.from(document.querySelectorAll('.label'));

const butStart = document.querySelector('[data-start]');

const days = document.querySelector('[data-days]');

const hours = document.querySelector('[data-hours]');

const minutes = document.querySelector('[data-minutes]');

const seconds = document.querySelector('[data-seconds]');

butStart.disabled = true;

timer.style.display = 'flex';

timer.style.marginTop = '10px';

field.forEach(el => {
  el.style.marginRight = '10px';
});

value.forEach(el => {
  el.style.fontSize = '30px';
  el.style.fontFamily = 'Impact,Charcoal,sans-serif';
  el.style.fontStyle = 'italic';
});

label.forEach(el => {
  el.style.fontSize = '30px';
  el.style.fontFamily = 'Impact,Charcoal,sans-serif';
  el.style.fontStyle = 'italic';
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let deltaTime = selectedDates[0].getTime() - currentDate;

    if (deltaTime <= 0) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      butStart.disabled = false;
      butStart.addEventListener('click', () => {
        const timer = setInterval(() => {
          const newTime = Date.now();
          const newDelta = selectedDates[0].getTime() - newTime;
          const newTimeComp = convertMs(newDelta);
          seconds.textContent = addLeadingZero(newTimeComp.seconds);
          minutes.textContent = addLeadingZero(newTimeComp.minutes);
          hours.textContent = addLeadingZero(newTimeComp.hours);
          days.textContent = addLeadingZero(newTimeComp.days);

          if (newDelta === 0) {
            clearInterval(timer);
          }
        }, 1000);
      });
    }
  },
};

flatpickr(selector, options);

const currentDate = Date.now();

function convertMs(ms) {
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

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
