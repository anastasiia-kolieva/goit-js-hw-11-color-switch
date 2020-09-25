startBtnRef = document.querySelector('[data-action="start"]');
stopBtnRef = document.querySelector('[data-action="stop"]');
bodyRef = document.querySelector('body');

let interval = null;
let isActive = false;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setRandomColor = () => {
  // рандомный индекс елемента массива colors (минимю=0, максимально длинна массива-1)
  const randomIndexOfArray = randomIntegerFromInterval(0, colors.length - 1);
  // рандомный цвет по определённому выше рандомному индексу елемента массива
  const randomColor = colors[randomIndexOfArray];
  // присвоение рандомного цвета к background body
  bodyRef.style.backgroundColor = randomColor;
  console.log(randomColor);
};

startBtnRef.addEventListener('click', () => {
  if (isActive) {
    return;
  }
  isActive = true;
  interval = setInterval(setRandomColor, 1000);
});

stopBtnRef.addEventListener('click', () => {
  clearInterval(interval);
  isActive = false;
});
