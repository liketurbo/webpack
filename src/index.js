import './assets/styles/index.css';
import './assets/styles/index.less';
import './assets/styles/index.sass';
import './assets/styles/index.styl';
import createDiv from './components/create-div';
import createImage from './components/create-image';
import imageUrl from './assets/imgs/rose.jpg';

document.body.appendChild(createDiv('div'));
document.body.appendChild(createImage(imageUrl));
