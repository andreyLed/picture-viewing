import ng from 'angular';
import pictureList from './pictureList';
import pictureListItem from './pictureListItem';
import picture from './picture';
import picturesHeader from './picturesHeader';
import picturesFooter from './picturesFooter';




export default ng.module('app.components', [pictureList, pictureListItem, picture, picturesHeader, picturesFooter])
  .name;
