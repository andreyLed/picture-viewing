export default class PictureListController {
  constructor(picturesService) {
    'ngInject';
    this.picturesService = picturesService;
  }

  $onInit() {
    this.init();
  }

  init() {
    this.picturesService.list().then((data) => {
      this.pictures = data.splice(0, 6);
      console.log(this.pictures);
      
    });
  }
}
