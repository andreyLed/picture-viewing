import ng from 'angular';
import pictureList from './pictureList';

import picturesHeader from './picturesHeader';


export default ng.module('app.components', [pictureList, picturesHeader])
  .name;
