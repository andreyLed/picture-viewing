export default class PictureListController {
  constructor(picturesService) {
    'ngInject';
    this.picturesService = picturesService;
  }

  $onInit() {
    this.picturesService.albums().then((data) => {
      this.albums = data;
      this.pageTitle = 'Albums list';
    });
  }

}
