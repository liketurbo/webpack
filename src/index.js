import './assets/styles/index.css';
import './assets/styles/index.less';
import './assets/styles/index.sass';
import './assets/styles/index.styl';
import createDiv from './components/create-div';
import createImage from './components/create-image';

import rose from './assets/imgs/rose.jpg';
import kitty from './assets/imgs/kitty.jpg';
import murray from './assets/imgs/murray.jpg';
import sausage from './assets/imgs/sausage.jpg';

document.body.appendChild(createDiv('div'));
document.body.appendChild(createImage(rose.src, rose.srcSet));
document.body.appendChild(createImage(kitty.src, kitty.srcSet));
document.body.appendChild(createImage(murray.src, murray.srcSet));
document.body.appendChild(createImage(sausage.src, sausage.srcSet));
