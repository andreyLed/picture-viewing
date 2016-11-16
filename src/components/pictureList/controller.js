export default class PictureListController {
  constructor(picturesService) {
    'ngInject';
    this.picturesService = picturesService;
  }

  $onInit() {
    this.picturesService.list().then((data) => {
      this.pictures = data.slice(0, 6);
      console.log(this.pictures);
    });
  }

}
