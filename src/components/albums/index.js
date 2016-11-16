import ng from 'angular';

import albumsComponent from './component';

export default ng.module('app.component.albums', [])
.component('albums', albumsComponent)
.name;
