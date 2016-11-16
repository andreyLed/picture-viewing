export default class PictureListController {
  constructor($state, $stateParams, picturesService) {
    'ngInject';
    this.picturesService = picturesService;
    this.type = $state.current.data.pageType;
    this.id = $stateParams.id;
  }

  $onInit() {
    if (this.type === 'home') {
      this.picturesService.list().then((data) => {
        this.pictures = data.slice(0, 6);
        this.pageTitle = 'All pictures';
      });
    } else {
      this.picturesService.album(this.id).then((data) => {
        this.pictures = data.slice(0, 6);
        this.pageTitle = `Picture Album № ${this.pictures[0].albumId}`;
      });
    }
  }

}
