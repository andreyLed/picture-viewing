import ng from 'angular';

import pictureListItemComponent from './component';

export default ng.module('app.component.pictureListItem', [])
.component('pictureListItem', pictureListItemComponent)
.name;
