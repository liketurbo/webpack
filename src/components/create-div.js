import greeting from './greeting';

const createDiv = text => {
  const element = document.createElement('div');
  element.innerHTML = text || greeting();
  return element;
};

export default createDiv;
