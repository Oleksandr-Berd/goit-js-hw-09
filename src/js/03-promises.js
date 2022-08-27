import Notiflix from 'notiflix';

const inputDelay = document.querySelector('[name="delay"]');

const inputStep = document.querySelector('[name="step"]');

const inputAmount = document.querySelector('[name="amount"]');

const butSubmit = document.querySelector('[type="submit"]');

let inpDelay = 0;

let inpStep = 0;

let inpAmount = 0;

function createDelay(evt) {
  inpDelay = evt.currentTarget.value;
  return inpDelay;
}

function createStep(evt) {
  inpStep = evt.currentTarget.value;
  return inpStep;
}

function createAmount(evt) {
  inpAmount = evt.currentTarget.value;
  return inpAmount;
}

function createSubmit(evt) {
  evt.preventDefault();
  let delay = Number(inpDelay);
  let step = Number(inpStep);
  amount = inpAmount;

  let position = 0;

  const timer = setInterval(function createPromise() {
    const shouldResolve = Math.random() > 0.3;
    position += 1;
    if (position > 1) {
      delay = position * step + Number(inpDelay) - step;
    }
    if (shouldResolve) {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    }
    if (position >= amount) {
      clearInterval(timer);
    }
  }, delay);
}

inputDelay.addEventListener('input', createDelay);

inputStep.addEventListener('input', createStep);

inputAmount.addEventListener('input', createAmount);

butSubmit.addEventListener('click', createSubmit);

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   })
