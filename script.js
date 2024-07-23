const inputEl = document.getElementById('input-text');
const suggestUlEl = document.getElementById('suggest-list');

const SEARCH_DATA = ['asdasdasd', 'lkjlkjlkj', 'qweqweqwe', 'zxczxczxc'];

const render = (data) => {
  let liData = data.reduce((acc, curr) => {
    acc += `<li>${curr}</li>`;
    return acc;
  }, '');

  if (liData.length > 0) {
    suggestUlEl.style.display = 'block';
    suggestUlEl.innerHTML = liData;
  } else {
    suggestUlEl.style.display = 'none';
  }
};

const myDebounce = (cb, time) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, arguments);
    }, time);
  };
};

const makeApiCall = (e) => {
  suggestUlEl.style.display = 'none';
  if (e.target.value?.length > 0) {
    setTimeout(() => {
      render(SEARCH_DATA);
    }, 1000);
  }
};

const onInputChange = myDebounce(makeApiCall, 1000);

inputEl.addEventListener('input', onInputChange);
