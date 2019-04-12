import './assets/styles/index.css';
import './assets/styles/index.less';
import './assets/styles/index.sass';
import './assets/styles/index.styl';
import createDiv from './components/create-div';
import createImage from './components/create-image';

import rose from './assets/images/rose.jpg';
import kitty from './assets/images/kitty.jpg';
import murray from './assets/images/murray.jpg';
import sausage from './assets/images/sausage.jpg';

document.body.appendChild(createDiv());
document.body.appendChild(createImage(rose.src, rose.srcSet));
document.body.appendChild(createImage(kitty.src, kitty.srcSet));
document.body.appendChild(createImage(murray.src, murray.srcSet));
document.body.appendChild(createImage(sausage.src, sausage.srcSet));
