import ng from 'angular';

import pictureListComponent from './component';

export default ng.module('app.component.pictureList', [])
.component('pictureList', pictureListComponent)
.name;
