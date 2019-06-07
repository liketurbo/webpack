import Worker from 'worker-loader!./worker';

let state = 'foo';

const element = document.createElement('h1');
element.innerHTML = state;
document.body.append(element);

const worker = new Worker();
worker.addEventListener('message', ({ data: { text } }) => {
  state = text;
  element.innerHTML = text;
});

element.onclick = () => worker.postMessage({ text: state });
