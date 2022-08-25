// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const selector = document.querySelector('#datetime-picker');

const timer = document.querySelector('.timer');

const field = Array.from(document.querySelectorAll('.field'));

const value = Array.from(document.querySelectorAll('.value'));

const label = Array.from(document.querySelectorAll('.label'));

const butStart = document.querySelector('[data-start]');

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
    console.log(selectedDates[0]);
  },
};

flatpickr(selector, options);
