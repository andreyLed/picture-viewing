export default class PictureListController {
  constructor(picturesService) {
    'ngInject';
    this.picturesService = picturesService;
  }

  $onInit() {
    this.init();
  }

  init() {
    this.pictureListService.list().then((data) => {
      this.pictures = data;
    });
  }
}
