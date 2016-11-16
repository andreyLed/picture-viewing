import ng from 'angular';

import pictureComponent from './component';

export default ng.module('app.component.picture', [])
.component('picture', pictureComponent)
.name;
