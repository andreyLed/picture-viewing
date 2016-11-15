import template from './pictureListItem.html';
import style from './style.less';
import controller from './controller';


export default {
  template,
  style,
  controller,
  bindings: {
    pictureItemData: '<'
  }
};
