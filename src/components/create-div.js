import greeting from './greeting';

const createDiv = text => {
  const element = document.createElement('div');
  element.innerHTML = text || greeting();
  element.onclick = () => {
    import('./lazy')
      .then(lazy => {
        element.textContent = lazy.default;
        element.classList.add('lazy');
      })
      .catch(err => {
        console.error(err);
      });
  };
  return element;
};

export default createDiv;
