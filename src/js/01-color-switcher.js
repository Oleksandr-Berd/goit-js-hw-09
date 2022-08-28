function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const butStart = document.querySelector('[data-start]');
const butStop = document.querySelector('[data-stop');
const body = document.querySelector('body');
let colorSwitch = null;
butStop.disabled = true;

butStart.addEventListener('click', () => {
  colorSwitch = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  butStart.disabled = true;
  butStop.disabled = false;
});

butStop.addEventListener('click', () => {
  clearInterval(colorSwitch);
  butStart.disabled = false;
  butStop.disabled = true;
});
