import ng from 'angular';
import pictureList from './pictureList';
import pictureListItem from './pictureListItem';
import picture from './pictures';
import picturesHeader from './picturesHeader';


export default ng.module('app.components', [pictureList, pictureListItem, picture, picturesHeader])
  .name;
