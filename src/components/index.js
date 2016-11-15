import ng from 'angular';
import pictureList from './pictureList';
import pictureListItem from './pictureListItem';

import picturesHeader from './picturesHeader';


export default ng.module('app.components', [pictureList, pictureListItem, picturesHeader])
  .name;
