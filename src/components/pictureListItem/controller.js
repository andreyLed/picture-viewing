export default class pictureListItemController {
  constructor() {
    'ngInject';
    
  }

  $onInit() {
    console.log(this);
    this.url = this.pictureItemData.url;
  }

  
}
